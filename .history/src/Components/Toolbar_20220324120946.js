import React from 'react';
import {Toolbar,Typography,Button } from '@mui/material';
import SideDrawer from './SideDrawer';
import Logo from '../data/logo.png';



export default function NavToolbar(props) {



  return (
    <Toolbar style={{backgroundColor:"rgb(254,190,15)"}}>
      <SideDrawer/>
      <img src={Logo} alt="Logo" style={{width: "4%"}}/>
      <Typography variant="h6" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
        Age Care
      </Typography>
    </Toolbar>
  );
}
