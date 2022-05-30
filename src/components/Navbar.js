import React, { Component, useState } from 'react';
import "../App.css"

import icons from '../assets/svg-icons/index';
import NavbarButton from './NavbarButtons';


export default class Navbar extends Component {

  constructor(props) {
    super(props);
    
    this.state={
      page: "music"
    }
    

  }

  funct ( ){
    // alert("function wurde gerufen")
    this.props.onClick()
  }
  

  

  render() {
    
    
    return(

        <div className='Sidenav'>
            <NavbarButton src={icons.home} onClick={()=>{this.state.page="home"; this.funct()}}></NavbarButton>
            <NavbarButton src={icons.music} onClick={()=>{this.state.page="music"; this.funct()}}></NavbarButton>
            <NavbarButton src={icons.map} onClick={()=>{this.state.page="navigation"; this.funct()}}></NavbarButton>
            <NavbarButton src={icons.home} onClick={()=>{this.state.page="home"; this.funct()}}></NavbarButton>
            <NavbarButton src={icons.settings} onClick={()=>{this.state.page="settings"; this.funct()}}></NavbarButton>

        </div>
    )
  }

}

