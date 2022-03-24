import logo from './logo.svg';
import './App.css';
import NavToolbar from './Components/Toolbar';
import LineChart from './Components/LineChart';
import { UserData } from './data';
import { useState } from 'react';
import ChartPage from './Pages/ChartPage';
import DataGridPage from './Pages/DataGridPage';
import { Link } from "react-router-dom";


function App() {
  // const [view, setView] = useState("chartt");



  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
    </div>

    // <div className="App">
    //   <NavToolbar function={setView}/>
    //   <div style={{width:1500}}>
    //     {
    //       view=="chart"?
    //       <ChartPage/>
    //       :<DataGridPage/>
    //     }
    //   </div>
    // </div>
  );
}

export default App;
