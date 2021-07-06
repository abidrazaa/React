import { useState, useEffect } from 'react'
import reactDom from 'react-dom';
import './App.css'
import PostCard from "./components/PostCard"
import FbImageLibrary from 'react-fb-image-grid'
import FbPost from './components/FbPost';
import {register , login , getAllUsers} from "./Config/firebase"
import Dashboard from "./components/Dashboard"
import firebase from "firebase"




function App() {

  const db = firebase.firestore()

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [userLoggedIn, setUserLoggedIn ] = useState(false)
  

  const signIn = async() => {
    try{
      const userLoggedIn = await login(email,password)
      setUserLoggedIn(true)
      alert("User logged in")
    }
    catch(e){
      alert(e.message)
    }
  }

  const signUp = async () => {
    try{
      const userSignUp = await register(email,password)
      console.log("User signed Up ==> ",userSignUp.user.uid)
      alert("User Created")
      db.collection("users").doc(userSignUp.user.uid).set({name,email})
    }
    catch(e){
      alert(e.message)
    }
  }

  


 
  return (
    <div className="App" >
      <header className="App-header">

        {!userLoggedIn 
        ?
        <div>
          <input type="text" placeholder="name" name="name" 
          onChange={(e)=>{
            setName(e.target.value)
          }}
          />
          <input type="email" placeholder="email" name="email" 
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          />
          <input type="password" placeholder="password" name="password" 
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          />
          <button
          onClick = {signIn}
          >Login</button>
          <button
          onClick = {signUp}
          >Register</button>
          </div>

          :

          <Dashboard />

        
      
        }
        
        




      </header>
    </div>
       )     
}

export default App;


