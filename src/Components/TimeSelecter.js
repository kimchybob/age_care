import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import { FormControl } from '@mui/material';

export default function TimeSelecter() {
  const [value, setValue] = React.useState(null);

  return (
    <FormControl sx={{ m: 1, width: 200 }}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePicker
                label="Time"
                value={value}
                onChange={(newValue) => {
                setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    </FormControl>
    
  );
}