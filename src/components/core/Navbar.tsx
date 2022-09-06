import "../../App.css"
import './Navbar.css'

import NavbarButton from './NavbarButton';
import { Box } from '@mantine/core';
import { AppInstance } from '../../lib/types';
import * as React from "react";



export default function Navbar({ currentApp, openedApps, setCurrentApp }: { currentApp: string, openedApps: AppInstance[], setCurrentApp: (app: string) => void }) {

  const navbarApps = ["builtin-home", "builtin-music", "builtin-settings", "builtin-app-view"];

    return(

        <Box 
        className='Sidenav'
        sx={(theme) => ({
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0]
        })}>
            {Array.from(new Set(navbarApps.concat(openedApps.map((a) => a.appInfo.id)))).map((app) => <NavbarButton currentApp={currentApp} openedApps={openedApps} setCurrentApp={setCurrentApp} app={app} />)}

        </Box>
    )
  //}

}

