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



  return (
    <div className="App">
      <NavToolbar function={setView}/>
      <div style={{width:1200}}>
        {/* <ChartPage/> */}
        <DataGridPage/>
      </div>
    </div>
  );
}

export default App;
