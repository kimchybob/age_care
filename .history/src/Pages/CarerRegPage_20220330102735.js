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






function CarerRegPage(){

  return (
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
            <Grid item><SingleSelectList label={"carer role"}/></Grid>
            <Grid item>
                <FormControl sx={{ width: 800 }}>
                    <TextField id="outlined-basic" label="Beacon ID" variant="outlined" />
                </FormControl>
            </Grid>
            <Grid item><Button variant="outlined" size="large">Register</Button></Grid>
        </Grid>
        
    </Box>
  );
}
 
export default CarerRegPage;