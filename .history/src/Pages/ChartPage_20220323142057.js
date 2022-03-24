import { Line } from 'react-chartjs-2';
import {Chart as ChartJS} from "chart.js/auto"; 
import { UserData } from "../data";
import LineChart from "../Components/LineChart";
import MultiSelectList from "../Components/MultiSelectList";
import { Grid } from "@mui/material";
import {React,useState} from 'react';
import DateSelecter from '../Components/DateSelecter';
import TimeSelecter from '../Components/TimeSelecter';
import SingleSelectList from '../Components/SingleSelectList';






function ChartPage(){
  // const [carer,setCarer] = useState();

  const [userData,setUserData] = useState({
      labels: UserData.map((data) => data.Time),
      datasets: [
        {
          label:"Amy",
          data:UserData.map((data)=>data.Distance),
          backgroundColor:["red"],
        }
      ]
    });

  return (
    <div>
      <Grid container direction={"column"}> 
        <DateSelecter />
      </Grid>
      <LineChart chartData={userData}/>
    </div>
  );
}
 
export default ChartPage;