import {React} from 'react';
import TableChart from '../Components/TableChart';
import DateAndFilter from '../Components/DateAndFilter';

function DataGridPage(){

  return (
    <DateAndFilter myComponent={TableChart} label={"table"}/>
  );
}
 
export default DataGridPage;