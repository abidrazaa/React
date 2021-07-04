import { useState, useEffect } from 'react'
import reactDom from 'react-dom';
import './App.css'
import PostCard from "./components/PostCard"
import FbImageLibrary from 'react-fb-image-grid'
import FbPost from './components/FbPost';
import {register , login} from "./Config/firebase"


function App() {

  var d = new Date();
  var time = d.getTime();
  var year = d.getFullYear();
  var date = d.getDate();
  var month = d.getMonth();
  var compoleteDate = date + "/" + month + "/" + year 
  const user = {
    name: "Abid Raza",
    image: "https://reactjs.org/logo-og.png",
    message: "This is my first post",
    time: time,
    date: compoleteDate
  }
  
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [signInButton,setSignInButton] = useState(true)

  
  const signIn = async () => {
    setSignInButton(false)
    try {
      console.log('1')
      const user = await login(email, password)
      setUserLoggedIn(true)
      console.log('2')
      setSignInButton(true)

    } catch(e) {
      setErrorMessage(e.message)
      console.log('error', e.message)
    }
    console.log('3')
  }
  return (
    <div className="App" >
      <header className="App-header">

        <h1>Facebook Single Post</h1> 
        {/* <FbPost user = {user} /> */}
        <input type="text" placeholder="name" name="name" onChange={(e)=>{
            setName(e.target.value);
          }} /> 
        <input type="email" placeholder="email" name="email" onChange={(e)=>{
            setEmail(e.target.value);
          }}
        /> 
        <input type="password" placeholder="password" name="password" onChange={(e)=>{
            setPassword(e.target.value);
          }} />
        {signIn ?
        <div>
        <button onClick={()=>
          register(email,password,name)}
          >Register</button>
        
        <button onClick={()=>signIn(name,password)}>login</button>
        </div>
        :
        <div>
        <button onClick={()=>register(email,password,name)}>loading</button>
        
        <button onClick={()=>signIn(email,password)}>login</button>
        </div>
         }
      

      </header>
    
    
    
    </div>
  );
      }

export default App;


