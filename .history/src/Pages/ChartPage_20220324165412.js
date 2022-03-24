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
        <Grid item width={"100%"}>
          <Box
            sx={{
              boxShadow: 3,
              height: '6rem',
              // width:"100%",
              bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
              color: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
              p: 2,
              m: 3,
              borderRadius: 2,
            }}>
            <Typography 
              component="legend" 
              fontWeight={"bold"}
              textAlign={"left"} 
              margin={"3px"}
              fontSize={"20px"}>Search</Typography>
            <DateSelecter functions={showFilter}/> 
          </Box>
        </Grid>
        {filterVisible?
        <Grid 
          container
          direction={"column"}
          justifyContent="center" 
          alignItems="flex-start"
          item
          width={"100%"}
        >
          <Box
            sx={{
              boxShadow: 3,
              // height: '6rem',
              width:"96%",
              bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
              color: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
              p: 2,
              marginLeft: 3,
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
                  fontWeight={"bold"}
                  textAlign={"left"} 
                  margin={"3px"}
                  fontSize={"20px"}>Filter</Typography>
                <MultiSelectList label={"Carer"}/>
              </Grid>
              <Grid item><MultiSelectList label={"Resident"}/></Grid>
              <Grid item marginBottom={"5px"}>
                <IconButton onClick={filterClicked}>
                  <FilterAltIcon fontSize='large'/>
                </IconButton>
              </Grid>
            </Grid>
            <Grid item width={"90%"} height={"50%"}>
              <Typography 
                component="legend" 
                fontWeight={"bold"}
                textAlign={"left"} 
                margin={"3px"}
                fontSize={"20px"}>Carer Resident Activity</Typography>
              <LineChart chartData={userData}/>
            </Grid>
          </Box>
        </Grid>
        :
        <Box
          sx={{
            boxShadow: 3,
            // height: '6rem',
            width:"96%",
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
            color: (theme) =>
              theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
            p: 2,
            marginLeft: 3,
            borderRadius: 2,
          }}
        >
          <Typography 
            component="legend" 
            textAlign={"left"} 
            margin={"3px"}
            fontSize={"15px"}>
            Please select Date to display the line chart
          </Typography>
        </Box>
        }
      </Grid>
  );
}
 
export default ChartPage;