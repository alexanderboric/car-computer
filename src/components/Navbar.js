import React, { Component, useState, useEffect } from 'react';
import "../App.css"
import './Navbar.css'

import icons from '../assets/svg-icons/index';
import NavbarButton from './NavbarButtons';
import { useNavigate } from 'react-router-dom';



export default function Navbar(props) {



  /*funct ( ){
    // alert("function wurde gerufen")
    this.props.onClick()
  }*/

  let navigate = useNavigate();

 /*  useEffect(()=>{
    /* if (props) {
      props.onClick();
    } 
    props.onClick(page);
  },[page]); */
  

  

  //render() {
    
    
    return(

        <div className='Sidenav'>
            <NavbarButton src={icons.home} onClick={()=>navigate("home")}></NavbarButton>
            <NavbarButton src={icons.music} onClick={()=>navigate("music")}></NavbarButton>
            <NavbarButton src={icons.map} onClick={()=>navigate("navigation")}></NavbarButton>
            <NavbarButton src={icons.home} onClick={()=>navigate("home")}></NavbarButton>
            <NavbarButton src={icons.settings} onClick={()=>navigate("settings")}></NavbarButton>

        </div>
    )
  //}

}

