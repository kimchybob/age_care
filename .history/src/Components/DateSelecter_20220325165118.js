import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { FormControl, Grid, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { format } from 'date-fns';
import Endpoint from '../functions/Endpoint';
import axios from 'axios';




function DateSelecter(props){
    const [value, setValue] = React.useState(null);
    const [data,setData] = React.useState();

    const searchClicked = () =>{
        searchDate(value);
        // console.log(data);
    };

    const searchDate = async (date) =>{
        var url = 'https://sa3ykxqpng.execute-api.us-east-2.amazonaws.com/getActivity?dateCond=' + date;
        // console.log('http://admin:admin@172.26.131.149:5984/aurin-geo/' + position);
        // var url = 'http://admin:admin@172.26.131.149:5984/aurin-geo/mel';
        await axios.get(url,{
            headers:{
                'Access-Control-Allow-Origin' : "*",
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            },
            withCredentials: false ,
        })
        .then(
            response => {
                setData(response.data);
                props.functions(data);
                console.log(data);
            }
        );
    };

    return (
        <Grid 
            container 
            direction={"row"} 
            alignItems="center" 
            justifyContent="flex-start"
        >
            <FormControl sx={{ width:600}}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Date"
                        value={value}
                        onChange={(newValue) => {
                            setValue(format(newValue,"yyyy-MM-dd"));
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </FormControl>
            <IconButton onClick={searchClicked}>
                <SearchIcon fontSize='large'/>
            </IconButton>
        </Grid>
    );
}
 
export default DateSelecter;