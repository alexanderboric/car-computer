import "../../App.css";
import './Navbar.css';
import { Box, useMantineColorScheme } from '@mantine/core';
import { Link } from "react-router-dom";
import { AppInstance, InfotainmentApp } from "../../lib/types";
import { defaultApps } from "../../lib/defaultApps";
import * as React from "react";





export default function NavbarButton({ currentApp, openedApps, setCurrentApp, app }: { currentApp: string, openedApps: AppInstance[], setCurrentApp: (app: string) => void, app: string }) {

  const { colorScheme } = useMantineColorScheme();
  let dark = colorScheme === 'dark';

  const info = defaultApps.find(a => a.id === app);

  return (

    <Box className="Navbar-Buttons" onClick={() => setCurrentApp(app)}>
      <img src={require(`/apps/${app}/${(dark && info.iconPathDark) ? info.iconPathDark : info.iconPath}`)} className="Navbar-Button-Images" /* style={{ filter: dark ? "invert(1)" : "invert(0)" }} */ alt="Navbar Button"></img>



    </Box>
  )


}