// import logo from './logo.svg';
// import { useState } from 'React';

// import './App.css';

// function App() {
//   const name = "Hello World";
// const obj = {name: "Hello World Object"}
// const data = ['We', 'are', 'United'] //Show these in seperate tags
// const list = [{name: "Hello World 1"}, {name: "Hello World 2"}, {name: "Hello World 3"}] //Show these in seperate tags
// var complex = [{company: 'Expertizo', jobs: ['Javascript', 'React']}, {company: '10 Pearls', jobs: ['AngularJs','Ionic']}] //Show these in a Table

// const [bulbSwitch,setSwitchBulb] = useState(false)

// const switchTheBulb = () => {
//   setSwitchBulb(true);
// }


//   const kaam = ["anday","aalu","bahu"]
//   const car = {
//     name: "civic",
//     model:1990
//   }
//   return (
//     <div className="App">
//       <br/>
//       <br/>
      
//       <button
//       onClick = {switchTheBulb}
//       >
//       </button>

//       <br/>
//       <br/>


//       {data.map(item=>{
//         return <p>{item}</p>
//       })}

//       {list.map(item=>{
//         return <div>
//           <p>Name : {item.name}</p>   
//         </div>
//       })}



//         <table border="3">
//           <tr>
//             <th>Compnay</th>
//             <th>Jobs</th>
//           </tr>

        
//               {complex.map((item)=>{
//                 return <tr>
//                 <td>
//                 {item.company}
//                 </td>
//                 <td>
//                 <ul>
//                   {item.jobs.map((job)=>{
//                     return <li>{job}</li>
//                   })}
//                   </ul>
//                 </td>
//                 </tr>
//               })}
           
//         </table>
      
//         {/* <table border="3">
//           <tr>
//             <th>Name</th>
//             <th>Model</th>
//           </tr>
//           <tr>
//             <td>{car.name}</td>
//             <td>{car.model}</td>
//           </tr>
//         </table>


//         <ul>
//         <h1>AAJ k Kaam</h1>
//           {
//             kaam.map(item=>{
//               return <li>{item}</li>
//             })
//           }
//         </ul> */}

       

//     </div>
//   );
// }

// export default App;


import { useState } from 'react'
import './App.css'

function App() {
        //state name, function name that
                    // will update the state
  const [bulbSwitch, setBulbSwitch] = useState(false)

  const [Obstacle, setObstacle] = useState(true)
  /*
    State:
    1) Accessible from everywhere inside the component
    2) Whenever it updates, it rerenders the component
    3) States are directly immutable
  */

  //conditional rendering
  const bulbOn = 'https://previews.123rf.com/images/murika/murika1511/murika151100069/48123160-bright-glowing-incandescent-light-bulb-on-a-white-background.jpg'
  const bulbOff = 'https://previews.123rf.com/images/ericmilos/ericmilos0912/ericmilos091200136/6109526-3d-render-of-light-bulb-on-white.jpg'

  const bat = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.alamy.com%2Fstock-photo%2Fcricket-bat.html&psig=AOvVaw3s5ICfXHcFQMGZTtfztqAp&ust=1623654883930000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKiIhfeHlPECFQAAAAAdAAAAABAD'

  const ball = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0012%2F8797%2F9121%2Fproducts%2FCDBK15Ball_20Velocity_20Ball_20Red_1500x.jpg%3Fv%3D1534338478&imgrefurl=https%3A%2F%2Fwww.gray-nicolls.co.uk%2Fproducts%2Fvelocity-cricket-ball&tbnid=ORwkjj-BCp4pjM&vet=12ahUKEwiOw7qpiZTxAhVOaBoKHdXXBQ4QMygAegUIARDbAQ..i&docid=F5nY0KlMBMdjwM&w=1500&h=1503&q=cricket%20ball%20images&ved=2ahUKEwiOw7qpiZTxAhVOaBoKHdXXBQ4QMygAegUIARDbAQ'

  const switchTheBulb = () => {
    setBulbSwitch(!bulbSwitch) //bulbSwitch = true
  }

  const changeState = () => {
    setObstacle("ball")
  }

  return (
    <div className="App">
      <header className="App-header">
        <br /><br /><br />

        {/* {!bulbSwitch && <img width="300" src='https://previews.123rf.com/images/ericmilos/ericmilos0912/ericmilos091200136/6109526-3d-render-of-light-bulb-on-white.jpg' />}
        {bulbSwitch && <img width="300" src='https://previews.123rf.com/images/murika/murika1511/murika151100069/48123160-bright-glowing-incandescent-light-bulb-on-a-white-background.jpg' />} */}



        <img width="300" src={bulbSwitch ? bulbOn : bulbOff} />

        <br /><br /><br />

        <button
          onClick={switchTheBulb}
          style={{ backgroundColor: 'blue', color: 'white', height: 100 }}
        >
            Switch on/off the bulb
        </button>




        <br /><br /><br />
        
        <select name="" id="" onChange={changeState}>
          <option value="" disabled selected> Select </option>
          <option value="bat"> Bat </option>
          <option value="ball"> Ball </option>
        </select>
        
        <img src={Obstacle=="bat" ? "bat" : "ball"}  />
        
        <br /><br /><br />
        <br /><br /><br />
        <br /><br /><br />
        <img src='https://i.ytimg.com/vi/V_M10hzY89U/mqdefault.jpg' className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;