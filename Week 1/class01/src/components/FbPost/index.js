import FbImageLibrary from 'react-fb-image-grid'


function FbPost(props) {
    console.log("user ==> ",props.user);

    const {name,message,image,date,time} = props.user;

    console.log("user date ==> ",date);
    console.log("user time ==> ",time);

    return(
    <div className="post-card"
          style= {{backgroundColor:"white", padding:20 }}
        
        >
          <div
          style={{display:"flex"}}
          >
            {/* <img src= alt="" /> */}
            <div>
              <img src={image} alt="image" 
                style= {{height:40, width:40 , borderRadius:500}}
                />
                
            </div>
            <div
              style= {{color:"black", fontSize:15, fontWeight:700}}
            
            >
                &nbsp; {name}
                <br />
                {date}
              </div>
          </div>
          <div className="images">
            <FbImageLibrary images={["https://reactjs.org/logo-og.png","https://reactjs.org/logo-og.png","https://reactjs.org/logo-og.png","https://reactjs.org/logo-og.png","https://reactjs.org/logo-og.png","https://reactjs.org/logo-og.png"]}/>
            
          </div>

          <div className="comments"
          style={{display:"flex"}}       
          >
            <div>
                <img src={image} alt="image" 
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
       

       

    )}

export default FbPost;