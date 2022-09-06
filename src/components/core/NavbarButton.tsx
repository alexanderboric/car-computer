import "../../App.css";
import './Navbar.css';
import { Box, Button, Group, Image, useMantineColorScheme } from '@mantine/core';
import { Link } from "react-router-dom";
import { AppInstance, InfotainmentApp } from "../../lib/types";
import { defaultApps } from "../../lib/defaultApps";
import * as React from "react";





export default function NavbarButton({ currentApp, openedApps, setCurrentApp, app }: { currentApp: string, openedApps: AppInstance[], setCurrentApp: (app: string) => void, app: string }) {

  const { colorScheme } = useMantineColorScheme();
  let dark = colorScheme === 'dark';

  const info = defaultApps.find(a => a.id === app);

  return (

    <Button variant={openedApps.find((a) => a.appInfo.id === app) ? "light" : "subtle"} color="dark" style={{ height: "75px", width: "75px" }} pr={0} pl={0} radius="lg" onClick={() => setCurrentApp(app)}>
      <Group position="center">
        <Image width={50} height={50} src={require(`/apps/${app}/${(dark && info.iconPathDark) ? info.iconPathDark : info.iconPath}`)} /* style={{ filter: dark ? "invert(1)" : "invert(0)" }} */ alt=""/>
      </Group>


    </Button>
  )


}