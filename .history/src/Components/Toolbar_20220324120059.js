import React from 'react';
import {Toolbar,Typography,Button } from '@mui/material';
import SideDrawer from './SideDrawer';
import Logo from '../data/logo.png';



export default function NavToolbar(props) {



  return (
    <Toolbar style={{backgroundColor:"rgb(254,190,15)"}}>
      <SideDrawer/>
      <img src={Logo} alt="Logo" style={{width: "100%",height:"92vh"}}/>
      <Typography variant="h6">
        Age Care
      </Typography>
    </Toolbar>
  );
}
