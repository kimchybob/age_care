import Background from '../data/bg.png';
import React, { Component } from 'react';
import { CardMedia } from '@material-ui/core';
import Card from '@material-ui/core/Card';




export default class WelcomePage extends Component{
render(){
        return (
            <img src={Background} alt="Logo" style={{width: "100%",height:"92vh"}}/>
        )

    }

}