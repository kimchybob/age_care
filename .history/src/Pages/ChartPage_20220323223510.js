import { Line } from 'react-chartjs-2';
import {Chart as ChartJS} from "chart.js/auto"; 
import { UserData } from "../data";
import LineChart from "../Components/LineChart";
import MultiSelectList from "../Components/MultiSelectList";
import { Grid,IconButton, Typography } from "@mui/material";
import {React,useState} from 'react';
import DateSelecter from '../Components/DateSelecter';
import TimeSelecter from '../Components/TimeSelecter';
import SingleSelectList from '../Components/SingleSelectList';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Label } from '@mui/icons-material';






function ChartPage(){
  // const [carer,setCarer] = useState();

  const [userData,setUserData] = useState({
    labels: UserData.map((data) => data.Time),
    datasets: [
      {
        label:"Amy",
        data:UserData.map((data)=>data.Distance),
        borderColor:["red"]
      }
    ]
  });

  const [visible,setVisible] = useState(false);

  const filterClicked = () =>{
    setVisible(true);
  };

  const [filterVisible, setFilterVisible] = useState(false);

  const showFilter = () =>{
    setFilterVisible(true);
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
          <Typography 
            component="legend" 
            textAlign={"left"} 
            marginLeft={"2px"}
            fontSize={"15px"}>Search</Typography>
          <DateSelecter functions={showFilter}/>   
        </Grid>
        {filterVisible?
        <Grid 
          container
          direction={"column"}
          justifyContent="center" 
          alignItems="center"
        >
          <Grid 
            item
            container
            direction={"row"}
            justifyContent="center" 
            alignItems="center"
          >
            <MultiSelectList label={"Carer"}/>
            <MultiSelectList label={"Resident"}/>
            <IconButton onClick={filterClicked}>
                <FilterAltIcon/>
            </IconButton>
          </Grid>
          <Grid item width={1200}>
            <LineChart chartData={userData}/>
          </Grid>
        </Grid>
        :<h1/>}
      </Grid>
    </div>
  );
}
 
export default ChartPage;