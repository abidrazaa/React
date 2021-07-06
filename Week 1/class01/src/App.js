import { useState, useEffect } from 'react'
import reactDom from 'react-dom';
import './App.css'
import OlxCard from "./components/Card"
import {Button} from "react-bootstrap";
import OlxNavbar from "./components/Navbar"





function App() {

  return (
    <div className="App" >
      <header className="App-header">
        <OlxNavbar />

        <OlxCard />


        {/* <Button>Click me</Button> */}


  
        




      </header>
    </div>
       )     
}

export default App;


