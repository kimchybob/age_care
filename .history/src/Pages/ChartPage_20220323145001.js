import { Line } from 'react-chartjs-2';
import {Chart as ChartJS} from "chart.js/auto"; 
import { UserData } from "../data";
import LineChart from "../Components/LineChart";
import MultiSelectList from "../Components/MultiSelectList";
import { Grid,IconButton } from "@mui/material";
import {React,useState} from 'react';
import DateSelecter from '../Components/DateSelecter';
import TimeSelecter from '../Components/TimeSelecter';
import SingleSelectList from '../Components/SingleSelectList';
import FilterAltIcon from '@mui/icons-material/FilterAlt';






function ChartPage(){
  // const [carer,setCarer] = useState();

  const [userData,setUserData] = useState({
    labels: UserData.map((data) => data.Time),
    datasets: [
      {
        label:"Amy",
        data:UserData.map((data)=>data.Distance),
        // backgroundColor:["red"],
        borderColor:["red"]
      }
    ]
  });

  const filterClicked = () =>{

  };

  return (
    <div>
      <Grid 
        container 
        direction={"column"} 
        justifyContent="center" 
        alignItems="center"
      >
        <Grid item>
          <DateSelecter />   
        </Grid>
        <Grid 
          container
          direction={"row"}
          justifyContent="center" 
          alignItems="center">
            <MultiSelectList label={"Carer"}/>
            <MultiSelectList label={"Resident"}/>
            <IconButton onClick={filterClicked}>
                <FilterAltIcon/>
            </IconButton>
        </Grid>
      </Grid>
      <LineChart chartData={userData}/>
    </div>
  );
}
 
export default ChartPage;