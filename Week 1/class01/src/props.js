import { useState } from 'react'
import './App.css'
import CustomButton from './components/CustomButton';
import Dashboard from './views/Dashboard';
import Home from './views/Home';




function App() {


  const [screen, setScreen] = useState('Home')

  return (
    <div className="App">
      <header className="App-header">
        <CustomButton title="Home"/>
        <CustomButton title="Dashboard"/>

        {screen === "Home" &&
        <Home />}
        {screen === "Dashboard" &&
        <Dashboard />}

{/*  */}
      </header>
    </div>
  );
}

export default App;


