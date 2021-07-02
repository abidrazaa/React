import { useState, useEffect } from 'react'
import './App.css'
import PostCard from "./components/PostCard"


function App() {


  const [showPosts,setShowPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(res => setShowPosts(res))
  }, [])


  // const [deletePost, setDeletePost] = useState();

  const deleteIndex = (index) => {
    console.log("index is :::: == >>> ",index);
    const tempList = [...showPosts];
    tempList.splice(index,1);
    setShowPosts(tempList);
  }

  const editIndex = (index) => {


  }
  return (
    <div className="App" >
      <header className="App-header">

        <h1>Facebook Posts</h1>
        {
        showPosts.map((value,index)=>{
          // console.log("post ==> ",value);
          // console.log("index ==> ",index);
          return (
            <div 
            style={{margin:"10" }}
            >
              <PostCard post={value} index = {index} delete = {deleteIndex} edit={editIndex} /> 
              <br />
            </div>
          )
        }
    )        
}
      </header>
    </div>
  );
      }

export default App;


