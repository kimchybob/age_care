import { Line } from 'react-chartjs-2';
import {Chart as ChartJS} from "chart.js/auto"; 
import { UserData } from "../data/data";
// import * as React from 'react';
import LineChart from "../Components/LineChart";
import MultiSelectList from "../Components/MultiSelectList";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import {React,useState} from 'react';
import TimeSelecter from '../Components/TimeSelecter';
import SingleSelectList from '../Components/SingleSelectList';
import TableChart from '../Components/TableChart';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import DateSelecter from '../Components/DateSelecter';
import BasciCard from './Card';






function DateAndFilter(props){

  const [carerFilter,setCarerFilter] = useState([]);
  const [resFilter,setResFilter] = useState([]);

  const lineColors = ["#00FFFF","#A52A2A","#5F9EA0","#006400","#FF1493","#FFD700","#191970"]

  const filterClicked = () =>{
    var filterData = [];
    if(props.label ==="table"){
      for(let i = 0; i < result.length; i++){
        if(carerFilter.includes(result[i].carer) && resFilter.includes(result[i].responder)){
          filterData.push(result[i]);
        }
      }
      setUserData(filterData);
    }
    if(props.label==="line"){
      var dataset = [];
      var times = [];
      console.log(result);
      for(let n=0;n<carerFilter.length;n++){
        var distances = [];
        for(let i = 0; i < result.length; i++){
          if(result[i].carer===carerFilter[n]){
            distances.push(result[i].distance);
            times.push(result[i].time);
          }
        }
        if(distances.length!=0){
          dataset.push({
            label:"carer: "+carerFilter[n],
            data: distances,
            borderColor: lineColors[n%7]
          })
        }
      }
      console.log(dataset);
      setUserData({
        labels: times,
        datasets: dataset
      });
    }
    
  };

  var record = [];

  const [result,setResult] = useState([]);

  const [carer,setCarer] = useState([]);

  const [resident,setResident] = useState([]);

  const saveRecord = (data) =>{
    var carerTemp = [];
    var resTemp = [];
    for(let i =0; i<data.length;i++){
      if (!carerTemp.includes(data[i].carer)){
        carerTemp.push(data[i].carer);
      }
      if (!resTemp.includes(data[i].responder)){
        resTemp.push(data[i].responder);
      }
      data[i].id = i;
      record.push(data[i]);
    }
    setUserData(record);
    setResult(record);
    setCarer(carerTemp);
    setResident(resTemp);
  }

  const [userData,setUserData] = useState(props.label=="line"?{
    labels: UserData.map((data) => data.Time),
    datasets: [
      {
        label:"",
        data:[],
        borderColor:""
      }
    ]
  }:UserData);

  const [filterVisible, setFilterVisible] = useState(false);

  const showFilter = (data) =>{
    setFilterVisible(true);
    saveRecord(data);
  };
   
  const MyComponent = props.myComponent;

  return (
    <div>
      <Grid 
        container 
        direction={"column"} 
        justifyContent="center" 
        alignItems="flex-start"
        bgcolor={"rgb(250,250,250)"}
      >
        <Grid 
        item
        container
        justifyContent="space-around"
        alignItems="center"
        direction={"row"}>
            <BasciCard title={"Number of Carers"} number={"20"}/>
            <BasciCard title={"Number of Resident"} number={"17"}/>
            <BasciCard title={"Beacons out of charge"} number={"15"}/>
        </Grid>
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
              <AppBar position="static">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="secondary"
                  textColor="inherit"
                  variant="fullWidth"
                  aria-label="full width tabs example"
                >
                  <Tab label="Item One" {...a11yProps(0)} />
                  <Tab label="Item Two" {...a11yProps(1)} />
                  <Tab label="Item Three" {...a11yProps(2)} />
                </Tabs>
              </AppBar>
              <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
              >
                <TabPanel value={value} index={0} dir={theme.direction}>
                  Item One
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                  Item Two
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                  Item Three
                </TabPanel>
              </SwipeableViews>
            <Typography 
              component="legend" 
              textAlign={"left"} 
              fontWeight={"bold"}
              margin={"3px"}
              fontSize={"20px"}>Search</Typography>
            <DateSelecter functions={showFilter}/> 
          </Box>
        </Grid>
        {filterVisible&&carer&&resident?
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
              <Grid item xs={5}>
                <Typography 
                  component="legend" 
                  textAlign={"left"}
                  fontWeight={"bold"} 
                  margin={"3px"}
                  fontSize={"20px"}>Filter</Typography>
                <MultiSelectList label={"Carer"} names={carer} filter={setCarerFilter}/>
              </Grid>
              {props.label==="table"?<Grid item xs={5}><MultiSelectList label={"Resident"} names={resident} filter={setResFilter}/></Grid>:null}
              <Grid item xs={1} marginBottom={"5px"}>
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
                marginTop={"20px"}
                fontSize={"20px"}>Carer Resident Activity</Typography>
              <MyComponent chartData={userData}/>
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
            Please select Date to display the chart
          </Typography>
        </Box>
        }
      </Grid>
    </div>
  );
}
 
export default DateAndFilter;