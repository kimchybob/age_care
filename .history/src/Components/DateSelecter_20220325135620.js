import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { FormControl, Grid, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { format } from 'date-fns';
import Endpoint from '../functions/endpoint';




function DateSelecter(props){
    const [value, setValue] = React.useState(null);
    const searchClicked = () =>{
        props.functions(true);
        console.log(value);
        Endpoint.getData(value);
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