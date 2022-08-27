import "../../App.css"
import './Navbar.css'

import icons from '../../assets/svg-icons/index';
import NavbarButton from './NavbarButton';
import { Box } from '@mantine/core';
import { AppInstance } from '../../lib/types';
import * as React from "react";
import { defaultApps } from "../../lib/defaultApps";



export default function Navbar({ currentApp, openedApps, setCurrentApp }: { currentApp: string, openedApps: AppInstance[], setCurrentApp: (app: string) => void }) {

    return(

        <Box 
        className='Sidenav'
        sx={(theme) => ({
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0]
        })}>
            {!defaultApps.find(app => app.id === currentApp).hideInNav && <NavbarButton currentApp={currentApp} openedApps={openedApps} setCurrentApp={setCurrentApp} app={currentApp}></NavbarButton>}
            <NavbarButton currentApp={currentApp} openedApps={openedApps} setCurrentApp={setCurrentApp} app={"builtin-settings"}></NavbarButton>
            {/* <NavbarButton src={icons.music} link="music"></NavbarButton>
            <NavbarButton src={icons.map} link="navigation"></NavbarButton>
            <NavbarButton src={icons.home} link="/"></NavbarButton>
            <NavbarButton src={icons.settings} link="settings"></NavbarButton> */}

        </Box>
    )
  //}

}

