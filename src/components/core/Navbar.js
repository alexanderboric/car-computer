import React from 'react';
import "../App.css"
import './Navbar.css'

import icons from '../assets/svg-icons/index';
import NavbarButton from './NavbarButtons';
import { Box } from '@mantine/core';



export default function Navbar(props) {

    return(

        <Box 
        className='Sidenav'
        sx={(theme) => ({
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0]
        })}>
            <NavbarButton src={icons.home} link="/"></NavbarButton>
            <NavbarButton src={icons.music} link="music"></NavbarButton>
            <NavbarButton src={icons.map} link="navigation"></NavbarButton>
            <NavbarButton src={icons.home} link="/"></NavbarButton>
            <NavbarButton src={icons.settings} link="settings"></NavbarButton>

        </Box>
    )
  //}

}

