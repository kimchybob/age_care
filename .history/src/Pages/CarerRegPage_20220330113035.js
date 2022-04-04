import { Line } from 'react-chartjs-2';
import {Chart as ChartJS} from "chart.js/auto"; 
import LineChart from "../Components/LineChart";
import MultiSelectList from "../Components/MultiSelectList";
import { Box, Button, FormControl, Grid,IconButton, rgbToHex, Typography } from "@mui/material";
import {React,useState} from 'react';
import DateSelecter from '../Components/DateSelecter';
import TimeSelecter from '../Components/TimeSelecter';
import SingleSelectList from '../Components/SingleSelectList';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Label } from '@mui/icons-material';
import DateAndFilter from '../Components/DateAndFilter';
import TextField from '@mui/material/TextField';
import TableChart from '../Components/TableChart';
import { DataGrid, useGridApiRef } from '@mui/x-data-grid';
import CarerTable from '../Components/RegisterTable';






function CarerRegPage(){

    const [rows,setRows] = useState([
        {
            id:1,
            Role : "Administrator",
            BeaconID: "1234433"
        }
    ]);

    const [role,setRole] = useState();
    const [beacon,setBeacon] = useState();

  return (
      <Grid 
      container 
      direction={"column"}>
        <Grid item>
            <Box
            sx={{
            boxShadow: 3,
            height: '6rem',
            // width:"100%",
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
            color: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
            //   p: 2,
            paddingTop:4,
            m: 3,
            borderRadius: 2,
            }}>
                <Grid 
                container
                justifyContent="space-around"
                alignItems="center"
                direction={"row"}>
                    <Grid item><SingleSelectList label={"carer role"} func={setRole}/></Grid>
                    <Grid item>
                        <FormControl sx={{ width: 800 }}>
                            <TextField 
                            id="outlined-basic" 
                            label="Beacon ID" 
                            variant="outlined"
                            onChange={(event) => {setBeacon(event.target.value)}} />
                            {console.log(beacon)}
                        </FormControl>
                    </Grid>
                    <Grid item>
                        {/* {console.log(role+beacon)} */}
                        <Button 
                        onClick={setRows(rows.push({
                            id: rows[rows.length-1].id+1,
                            Role: role,
                            BeaconID: beacon
                        }))}
                        variant="outlined" 
                        size="large">Register</Button></Grid>
                </Grid>
            </Box>
        </Grid>
        <Grid item>
            <Box
            sx={{
            boxShadow: 3,
            width:"97%",
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
            color: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
            //   p: 2,
            paddingTop:4,
            m: 3,
            borderRadius: 2,
            }}>
                <CarerTable chartData={rows}/>
            </Box>
        </Grid>
      </Grid>
    

  );
}
 
export default CarerRegPage;