import logo from './logo.svg';
import './App.css';
import NavToolbar from './Components/Toolbar';
import LineChart from './Components/LineChart';
import { useState } from 'react';
import ChartPage from './Pages/ChartPage';
import DataGridPage from './Pages/DataGridPage';
import WelcomePage from './Pages/WelcomePage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CarerRegPage from './Pages/CarerRegPage';


function App() {
  const [view, setView] = useState("chartt");



  return (
    <Router>
      <div className="App">
        <NavToolbar function={setView}/>
        <div>
          <Switch>
            <Route exact path="/">
              <WelcomePage/>
            </Route>
            <Route path="/chartPage">
              <ChartPage/>
            </Route>
            <Route path="/carerRegister">
              <CarerRegPage/>
            </Route>
            <Route path="/dataGrid">
              <DataGridPage/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
