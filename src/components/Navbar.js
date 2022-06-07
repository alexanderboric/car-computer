import React, { Component, useState, useEffect } from 'react';
import "../App.css"
import './Navbar.css'

import icons from '../assets/svg-icons/index';
import NavbarButton from './NavbarButtons';



export default function Navbar(props) {


  const [page, setPage] = useState("music");

  /*funct ( ){
    // alert("function wurde gerufen")
    this.props.onClick()
  }*/

  useEffect(()=>{
    /* if (props) {
      props.onClick();
    } */
    props.onClick(page);
  },[page]);
  

  

  //render() {
    
    
    return(

        <div className='Sidenav'>
            <NavbarButton src={icons.home} onClick={()=>setPage("home")}></NavbarButton>
            <NavbarButton src={icons.music} onClick={()=>setPage("music")}></NavbarButton>
            <NavbarButton src={icons.map} onClick={()=>setPage("navigation")}></NavbarButton>
            <NavbarButton src={icons.home} onClick={()=>setPage("home")}></NavbarButton>
            <NavbarButton src={icons.settings} onClick={()=>setPage("settings")}></NavbarButton>

        </div>
    )
  //}

}

