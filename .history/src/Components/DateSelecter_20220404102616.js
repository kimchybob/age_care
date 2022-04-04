import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { FormControl, Grid, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { format } from 'date-fns';
import axios from 'axios';




function DateSelecter(props){
    const [value, setValue] = React.useState(null);

    const searchClicked = () =>{
        searchDate(value);
    };

    const searchDate = async (date) =>{
        var url = 'https://sa3ykxqpng.execute-api.us-east-2.amazonaws.com/getActivity?dateCond=' + date;
        await axios.get(url,{
            headers:{
                'Access-Control-Allow-Origin' : "*",
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            },
            withCredentials: false ,
        })
        .then(
            response => {
                console.log(response);
                setData(response.data);
                // transfer the data to DataAndFilter.js and show filter&chart card
                props.functions(response.data);
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
            <Grid item xs={8}>
                <FormControl sx={{ width:"100%"}}>
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
            </Grid>
            <Grid item xs={1}>
                <IconButton onClick={searchClicked}>
                    <SearchIcon fontSize='large'/>
                </IconButton>
            </Grid>
            
        </Grid>
    );
}
 
export default DateSelecter;