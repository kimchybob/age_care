import Background from '../data/bg.png';
import React, { Component } from 'react';




export default class WelcomePage extends Component{
render(){
        return (
            <img src={Background} alt="Logo" style={{width: "60%",height:"60%"}}/>
        )

    }

}