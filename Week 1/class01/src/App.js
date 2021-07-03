import { useState, useEffect } from 'react'
import reactDom from 'react-dom';
import './App.css'
import PostCard from "./components/PostCard"
import FbImageLibrary from 'react-fb-image-grid'
import FbPost from './components/FbPost';
import {register} from "./Config/firebase"


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


  return (
    <div className="App" >
      <header className="App-header">

        <h1>Facebook Single Post</h1> 
        <FbPost user = {user} />
        <input type="text" name="email" /> Email
        <input type="text" name="password" /> Password
        <button onClick={register}>Register</button>
        <button onClick={login}>login</button>

      

      </header>
    
    
    
    </div>
  );
      }

export default App;


