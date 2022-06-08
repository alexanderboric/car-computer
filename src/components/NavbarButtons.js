import React from "react";
import "../App.css";
import './Navbar.css';
import { useMantineColorScheme } from '@mantine/core';





export default function NavbarButton(props) {

  const { colorScheme } = useMantineColorScheme();
  let dark = colorScheme === 'dark';

  return (

    <div className="Navbar-Buttons" onClick={props.onClick}>
      <img src={props.src} className="Navbar-Button-Images" style={{ filter: dark ? "invert(1)" : "invert(0)" }} alt="Navbar Button"></img>



    </div>
  )


}