import React from 'react';
import {Toolbar,Typography,Button, IconButton } from '@mui/material';
import SideDrawer from './SideDrawer';
import Logo from '../data/logo.png';
import HomeIcon from '@mui/icons-material/Home';
import { useHistory } from "react-router-dom";




export default function NavToolbar(props) {

  const history = useHistory();


  return (
    <Toolbar style={{backgroundColor:"rgb(254,190,15)"}}>
      <SideDrawer/>
      <img src={Logo} alt="Logo" style={{width: "4%"}}/>
      <IconButton 
        onClick={()=>{history.push("/");}}
        style={{color: "rgb(246,144,29)"}}>
        <HomeIcon fontSize='large'/>
      </IconButton>
    </Toolbar>
  );
}
