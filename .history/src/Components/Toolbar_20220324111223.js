import React from 'react';
import {Toolbar,Typography,Button } from '@mui/material';
import SideDrawer from './SideDrawer';


export default function NavToolbar(props) {



  return (
    <Toolbar style={{backgroundColor:"rgb(254,190,15)"}}>
      <SideDrawer/>
      <Typography variant="h6">
        Age Care
      </Typography>
    </Toolbar>
  );
}
