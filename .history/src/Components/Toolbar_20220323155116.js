import React from 'react';
import {Toolbar,Typography,Button } from '@mui/material';
import SideDrawer from './SideDrawer';


export default function NavToolbar(props) {


  return (
    <Toolbar>
      <SideDrawer functions={props.functions}/>
      <Typography variant="h6">
        Age Care
      </Typography>
    </Toolbar>
  );
}
