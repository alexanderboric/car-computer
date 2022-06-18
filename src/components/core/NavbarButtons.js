import React from "react";
import "../../App.css";
import './Navbar.css';
import { Box, useMantineColorScheme } from '@mantine/core';
import { Link } from "react-router-dom";





export default function NavbarButton(props) {

  const { colorScheme } = useMantineColorScheme();
  let dark = colorScheme === 'dark';

  return (

    <Box className="Navbar-Buttons" component={Link} to={props.link}>
      <img src={props.src} className="Navbar-Button-Images" style={{ filter: dark ? "invert(1)" : "invert(0)" }} alt="Navbar Button"></img>



    </Box>
  )


}