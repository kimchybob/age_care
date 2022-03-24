import React from 'react';
import {Toolbar,Typography,Button, IconButton, Grid } from '@mui/material';
import SideDrawer from './SideDrawer';
import Logo from '../data/logo.png';
import HomeIcon from '@mui/icons-material/Home';
import { useHistory } from "react-router-dom";




export default function NavToolbar(props) {

  const history = useHistory();


  return (
    <Toolbar style={{backgroundColor:"rgb(254,190,15)"}}>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid 
          item
          container
          direction={"row"}
          spacing={1}
          xs={11}>
          <SideDrawer padding={"2"}/> 
          <img src={Logo} alt="Logo" style={{width: "5%"}}/>
        </Grid>
        <Grid item xs={1}>
          <IconButton 
            onClick={()=>{history.push("/");}}
            style={{color: "rgb(246,144,29)"}}>
            <HomeIcon fontSize='large'/>
          </IconButton>
        </Grid>
      </Grid>
      
    </Toolbar>
  );
}
