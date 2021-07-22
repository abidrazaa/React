import { useState, useEffect } from 'react'
import reactDom from 'react-dom';
import './App.css'
import OlxCard from "./components/Card"
import {Button} from "react-bootstrap";
import OlxNavbar from "./components/Navbar"
import Footer from './components/Footer';





function App() {

  return (
    <div className="App" >
      <header className="App-header">
        <OlxNavbar />
        <br />
        <br />
        <br />
        <br />
        <br />


        <OlxCard />
        <OlxCard />
        <OlxCard />

        <br />
        <br />
        <br />

        <Footer />


        {/* <Button>Click me</Button> */}


  
        




      </header>
    </div>
       )     
}

export default App;


