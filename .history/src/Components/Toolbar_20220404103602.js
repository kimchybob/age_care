import React from 'react';
import {Toolbar, IconButton, Grid } from '@mui/material';
import SideDrawer from './SideDrawer';
import Logo from '../data/logo.png';
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
        <SideDrawer padding={"2"}/> 
        <IconButton 
          style={{width:"5%"}}
          onClick={()=>{history.push("/");}}>
          <img src={Logo} alt="Logo" style={{width:"80%"}}/>
        </IconButton>
      </Grid>
      
    </Toolbar>
  );
}
