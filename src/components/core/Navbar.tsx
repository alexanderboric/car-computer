import "../../App.css"
import './Navbar.css'

import NavbarButton from './NavbarButton';
import { Box } from '@mantine/core';
import * as React from "react";
import { AppContext } from "../../lib/context";



export default function Navbar() {

  const navbarApps = ["builtin-home", "builtin-music", "builtin-settings", "builtin-app-view"];
  const { currentApp, setCurrentApp, openedApps, installedApps } = React.useContext(AppContext);

    return(

        <Box 
        className='Sidenav'
        sx={(theme) => ({
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0]
        })}>
            {installedApps.length > 0 && Array.from(new Set(navbarApps.concat(openedApps.map((a) => a.appInfo.id)))).map((app) => <NavbarButton key={app} currentApp={currentApp} openedApps={openedApps} setCurrentApp={setCurrentApp} app={app} />)}

        </Box>
    )
  //}

}

