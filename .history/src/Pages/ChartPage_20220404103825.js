import LineChart from "../Components/LineChart";
import {React,useState} from 'react';
import DateAndFilter from '../Components/DateAndFilter';

function ChartPage(){

  return (
    <DateAndFilter myComponent={LineChart} label={"line"}/>
  );
}
 
export default ChartPage;