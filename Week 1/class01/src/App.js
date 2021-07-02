import { useState, useEffect } from 'react'
import reactDom from 'react-dom';
import './App.css'
import PostCard from "./components/PostCard"
import FbImageLibrary from 'react-fb-image-grid'


function App() {


  


  return (
    <div className="App" >
      <header className="App-header">

        <h1>Facebook Single Post</h1>
        <div className="post-card"
          style= {{backgroundColor:"white", padding:20 }}
        
        >
          <div
          style={{display:"flex"}}
          >
            {/* <img src= alt="" /> */}
            <div>
              <img src="https://reactjs.org/logo-og.png" alt="image" 
                style= {{height:40, width:40 , borderRadius:500}}
                />
                
            </div>
            <div
              style= {{color:"black", fontSize:15, fontWeight:700}}
            
            >
                &nbsp; Abid Raza
                <br />
                Date
              </div>
          </div>
          <div className="images">
            <FbImageLibrary images={["https://reactjs.org/logo-og.png","https://reactjs.org/logo-og.png","https://reactjs.org/logo-og.png","https://reactjs.org/logo-og.png","https://reactjs.org/logo-og.png","https://reactjs.org/logo-og.png"]}/>
            
          </div>

          <div className="comments"
          style={{display:"flex"}}       
          >
            <div>
                <img src="https://reactjs.org/logo-og.png" alt="image" 
                  style= {{height:40, width:40 , borderRadius:500}}
                />
                  
              </div>
              <div>
              &nbsp;
                  <input type="text" 
                  style= {{borderRadius:300 , borderBlockColor:"black" }}
                  
                  />
              </div>
              <div>
              &nbsp;
                <button
                style= {{ color:"white", backgroundColor:"green", fontSize:20 }}
                
                >post</button>
              </div>

          </div>
        </div>
       

       


      

      </header>
    
    
    
    </div>
  );
      }

export default App;


