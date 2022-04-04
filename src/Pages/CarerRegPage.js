import { Box, Button, FormControl, Grid,IconButton, rgbToHex, Typography } from "@mui/material";
import {React,useState} from 'react';
import SingleSelectList from '../Components/SingleSelectList';
import TextField from '@mui/material/TextField';
import CarerTable from '../Components/RegisterTable';
import axios from 'axios';






function CarerRegPage(){

    //registered carer info
    const [rows,setRows] = useState([]);

    const requestRows = () => {
        var url = 'https://sa3ykxqpng.execute-api.us-east-2.amazonaws.com/getCarerRegistration';
        axios.get(url)
        .then(
            response => {
                var output = response.data;
                var row = [];
                for(let i =0; i< output.length; i++){
                    row.push({
                        id:i+1,
                        Role : output[i].Career_role,
                        BeaconID: output[i].BeaconId
                    });
                }
                setRows(row);
            }
        );
    };

    //existing carer roles
    const [role,setRole] = useState([]);

    const requestRoles = () => {
        var url = 'https://sa3ykxqpng.execute-api.us-east-2.amazonaws.com/getCarerRole';
        axios.get(url)
        .then(
            response => {
                var output = response.data;
                var roles = [];
                for(let i =0; i< output.length; i++){
                    roles.push(output[i].CarerRole+"-"+output[i].Description);
                }
                setRole(roles);
            }
        );
    };

    if(role.length==0){
        requestRoles();
    }
    if(rows.length==0){
        requestRows();
    }

    const [beacon,setBeacon] = useState("");

    const registration = () => {
        var newId = rows.length>0?rows[rows.length-1].id+1:1;
        var tempRow = [];
        tempRow.push(rows[0]);
        tempRow.push({
            id:newId,
            Role : role,
            BeaconID: beacon
        });
        setRows(tempRow);
    }

  return (
      <Grid 
      container 
      direction={"column"}>
        <Grid item>
            <Box
            sx={{
            boxShadow: 3,
            height: '6rem',
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
            color: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
            paddingTop:4,
            paddingLeft:3,
            m: 3,
            borderRadius: 2,
            }}>
                <Grid 
                container
                justifyContent="flex-start"
                spacing={1}
                alignItems="center"
                direction={"row"}>
                    <Grid item xs={4.5}><SingleSelectList label={"carer role"} names={role} func={setRole}/></Grid>
                    <Grid item xs={4.5}>
                        <FormControl sx={{ width: "100%" }}>
                            <TextField 
                            id="outlined-basic" 
                            label="Beacon ID" 
                            variant="outlined"
                            onChange={(event) => {setBeacon(event.target.value)}} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={1}>
                        <Button 
                        onClick={registration}
                        variant="outlined" 
                        size="large">Register</Button></Grid>
                </Grid>
            </Box>
        </Grid>
        <Grid item>
            <Box
            sx={{
            boxShadow: 3,
            width:"97%",
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
            color: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
            paddingTop:4,
            m: 3,
            borderRadius: 2,
            }}>
                <CarerTable chartData={rows}/>
            </Box>
        </Grid>
      </Grid>
    

  );
}
 
export default CarerRegPage;