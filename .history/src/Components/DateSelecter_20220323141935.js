import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { FormControl, Grid, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';



function DateSelecter(){
    const [value, setValue] = React.useState(null);
    const searchClicked = () =>{

    };

    return (
        <FormControl sx={{ m: 1}}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Grid container direction={"row"} alignItems="center" spacing={3}>
                    <Grid item>
                        <DatePicker
                            label="Date"
                            value={value}
                            onChange={(newValue) => {
                            setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </Grid>
                    <Grid item>
                        <IconButton onClick={searchClicked}>
                            <SearchIcon/>
                        </IconButton>
                    </Grid>
                </Grid>
                
            </LocalizationProvider>
        </FormControl>

        
    );
}
 
export default DateSelecter;