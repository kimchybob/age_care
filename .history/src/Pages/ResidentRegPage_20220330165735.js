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
import axios from 'axios';






function ResidentRegPage(){

    const [rows,setRows] = useState([
        {
            id:1,
            Role : "Administrator",
            BeaconID: "1234433"
        }
    ]);

    const [role,setRole] = useState([]);

    const requestRoles = () => {
        var url = 'https://sa3ykxqpng.execute-api.us-east-2.amazonaws.com/getResidentRole';
        axios.get(url)
        .then(
            response => {
                var output = response.data;
                var roles = [];
                for(let i =0; i< output.length; i++){
                    roles.push(output[i].Resident_Role+"-"+output[i].Description);
                }
                console.log(roles);
                setRole(roles);
            }
        );
    };


    requestRoles();
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
            paddingLeft:3,
            m: 3,
            borderRadius: 2,
            }}>
                <Grid 
                container
                justifyContent="flex-start"
                spacing={1}
                alignItems="center"
                direction={"row"}>
                    <Grid item xs={4.5}><SingleSelectList label={"Resident role"} names={role}/></Grid>
                    <Grid item xs={4.5}>
                        <FormControl sx={{ width: "100%" }}>
                            <TextField id="outlined-basic" label="Beacon ID" variant="outlined" />
                        </FormControl>
                    </Grid>
                    <Grid item xs={1}><Button variant="outlined" size="large" onClick={requestRoles}>Register</Button></Grid>
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
 
export default ResidentRegPage;