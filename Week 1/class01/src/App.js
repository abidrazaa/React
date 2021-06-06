import logo from './logo.svg';
import './App.css';

function App() {
  const kaam = ["anday","aalu","bahu"]
  const car = {
    name: "civic",
    model:1990
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> Amir Bhai zindabad.
        </p>
        <table border="3">
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
        </ul>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
