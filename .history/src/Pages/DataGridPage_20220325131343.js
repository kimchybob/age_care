import { Line } from 'react-chartjs-2';
import {Chart as ChartJS} from "chart.js/auto"; 
import { UserData } from "../data";
// import * as React from 'react';
import LineChart from "../Components/LineChart";
import MultiSelectList from "../Components/MultiSelectList";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import {React,useState} from 'react';
import DateSelecter from '../Components/DateSelecter';
import TimeSelecter from '../Components/TimeSelecter';
import SingleSelectList from '../Components/SingleSelectList';
import TableChart from '../Components/TableChart';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import DateAndFilter from '../Components/DateAndFilter';

function DataGridPage(){

  return (
    <DateAndFilter myComponent={TableChart} label={"table"}/>
  );
}
 
export default DataGridPage;