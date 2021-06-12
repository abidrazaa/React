import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Hello World";
const obj = {name: "Hello World Object"}
const data = ['We', 'are', 'United'] //Show these in seperate tags
const list = [{name: "Hello World 1"}, {name: "Hello World 2"}, {name: "Hello World 3"}] //Show these in seperate tags
var complex = [{company: 'Expertizo', jobs: ['Javascript', 'React']}, {company: '10 Pearls', jobs: ['AngularJs','Ionic']}] //Show these in a Table


  const kaam = ["anday","aalu","bahu"]
  const car = {
    name: "civic",
    model:1990
  }
  return (
    <div className="App">

      {data.map(item=>{
        return <p>{item}</p>
      })}

      {list.map(item=>{
        return <div>
          <p>Name : {item.name}</p>   
        </div>
      })}



        <table border="3">
          <tr>
            <th>Compnay</th>
            <th>Jobs</th>
          </tr>

        
              {complex.map((item)=>{
                return <tr>
                <td>
                {item.company}
                </td>
                <td>
                <ul>
                  {item.jobs.map((job)=>{
                    return <li>{job}</li>
                  })}
                  </ul>
                </td>
                </tr>
              })}
           
        </table>
      
        {/* <table border="3">
          <tr>
            <th>Name</th>
            <th>Model</th>
          </tr>
          <tr>
            <td>{car.name}</td>
            <td>{car.model}</td>
          </tr>
        </table>


        <ul>
        <h1>AAJ k Kaam</h1>
          {
            kaam.map(item=>{
              return <li>{item}</li>
            })
          }
        </ul> */}

       

    </div>
  );
}

export default App;
