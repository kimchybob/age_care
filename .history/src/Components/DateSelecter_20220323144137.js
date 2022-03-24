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
                <Grid 
                    container 
                    direction={"row"} 
                    alignItems="center" 
                    justifyContent="center"
                >
                    <FormControl sx={{ m: 1, width:200}}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Date"
                                value={value}
                                onChange={(newValue) => {
                                setValue(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </FormControl>
                    <IconButton onClick={searchClicked}>
                        <SearchIcon/>
                    </IconButton>
                </Grid>

        
    );
}
 
export default DateSelecter;