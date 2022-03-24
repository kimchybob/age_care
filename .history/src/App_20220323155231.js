import logo from './logo.svg';
import './App.css';
import NavToolbar from './Components/Toolbar';
import LineChart from './Components/LineChart';
import { UserData } from './data';
import { useState } from 'react';
import ChartPage from './Pages/ChartPage';
import DataGridPage from './Pages/DataGridPage';


function App() {
  const [view, setView] = useState("chart");
  const changeView = (string) =>{
    view = string;
  }

  return (
    <div className="App">
      <NavToolbar functions={changeView}/>
      <div style={{width:1500}}>
        {
          view=="chart"?
          <ChartPage/>
          :<DataGridPage/>
        }
      </div>
    </div>
  );
}

export default App;
