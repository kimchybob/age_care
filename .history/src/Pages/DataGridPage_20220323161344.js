import { Line } from 'react-chartjs-2';
import {Chart as ChartJS} from "chart.js/auto"; 
import { UserData } from "../data";
// import * as React from 'react';
import LineChart from "../Components/LineChart";
import MultiSelectList from "../Components/MultiSelectList";
import { Grid, IconButton } from "@mui/material";
import {React,useState} from 'react';
import DateSelecter from '../Components/DateSelecter';
import TimeSelecter from '../Components/TimeSelecter';
import SingleSelectList from '../Components/SingleSelectList';
import TableChart from '../Components/TableChart';
import FilterAltIcon from '@mui/icons-material/FilterAlt';






function DataGridPage(){
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
          <DateSelecter functions={showFilter}/>   
        </Grid>
        {filterVisible?
        <Grid 
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
            <TableChart UserData={UserData}/>
        </Grid>
        :<h1/>}
      </Grid>
    </div>
  );
}
 
export default DataGridPage;