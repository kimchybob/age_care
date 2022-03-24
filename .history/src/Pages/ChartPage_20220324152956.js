import { Line } from 'react-chartjs-2';
import {Chart as ChartJS} from "chart.js/auto"; 
import { UserData } from "../data";
import LineChart from "../Components/LineChart";
import MultiSelectList from "../Components/MultiSelectList";
import { Box, Grid,IconButton, rgbToHex, Typography } from "@mui/material";
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
      <Grid 
        container 
        direction={"column"} 
        justifyContent="center" 
        alignItems="flex-start"
        bgcolor={"rgb(250,250,250)"}
      >
        <Grid item>
          <Box
            sx={{
              boxShadow: 3,
              height: '6rem',
              width:"570%",
              bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
              color: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
              p: 2,
              m: 3,
              borderRadius: 2,
            }}>
            <Typography 
              component="legend" 
              textAlign={"left"} 
              margin={"3px"}
              fontSize={"15px"}>Search</Typography>
            <DateSelecter functions={showFilter}/> 
          </Box>
        </Grid>
        {filterVisible?
        <Grid 
          container
          direction={"column"}
          justifyContent="center" 
          alignItems="flex-start"
        >
          <Box
            sx={{
              boxShadow: 3,
              // height: '6rem',
              width:"95%",
              bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
              color: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
              p: 2,
              m: 3,
              borderRadius: 2,
            }}
          >
            <Grid 
              item
              container
              direction={"row"}
              justifyContent="flex-start" 
              alignItems="flex-end"
              spacing={1}
            >
              <Grid item>
                <Typography 
                  component="legend" 
                  textAlign={"left"} 
                  margin={"3px"}
                  fontSize={"15px"}>Filter</Typography>
                <MultiSelectList label={"Carer"}/>
              </Grid>
              <Grid item><MultiSelectList label={"Resident"}/></Grid>
              <Grid item marginBottom={"8px"}>
                <IconButton onClick={filterClicked}>
                  <FilterAltIcon/>
                </IconButton>
              </Grid>
            </Grid>
            <Grid item width={"100%"} height={"50%"}>
              <LineChart chartData={userData}/>
            </Grid>
          </Box>
        </Grid>
        :<h1/>}
      </Grid>
  );
}
 
export default ChartPage;