import '../../App.css';
import { useContext } from 'react';

import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import { BackgroundImage, Group, LoadingOverlay } from '@mantine/core';
import { SettingsContext } from '../../lib/context';
import * as React from 'react';
import AppView from './AppView';
import { AppInstance } from '../../lib/types';
import { defaultApps } from '../../lib/defaultApps';

export default function Manager() {


  const { settingsLoaded, useBackgroundImage, backgroundImageHomeScreenOnly, backgroundImageBlur } = useContext(SettingsContext);
  const [currentApp, setCurrentApp] = React.useState<string | null>("builtin-error");
  const [openedApps, setOpenedApps] = React.useState<AppInstance[]>([]);


  React.useEffect(() => {
    if (openedApps.find(app => app.appInfo.id === currentApp)) {
      return;
    } else {
      setOpenedApps([...openedApps, { appInfo: defaultApps.find(app => app.id === currentApp), appRuntime: <AppView app={defaultApps.find(app => app.id === currentApp)} /> }]);
    }
  }, [currentApp]);


  return (
    <>
      {settingsLoaded ? (
        <div className="App" style={{ display: 'flex', userSelect: "none", WebkitUserSelect: "none" }}  >
          <Navbar></Navbar>


          {/* <div style={{ justifyContent:'center',position:'absolute',right:0,top:0, width:"91%", height:"100%"}}>
                    {this.state.page}
                    
                </div> */}
          <div style={{ height: "100%" }}>
            {useBackgroundImage && !backgroundImageHomeScreenOnly && <BackgroundImage style={{ height: "100%", position: "absolute", filter: `blur(${(15 * (backgroundImageBlur / 100))}px)` }} src="/background.png" />}
            <div style={{ justifyContent: 'center', position: 'absolute', right: 0, top: 0, width: "91%", height: "100%", zIndex: 2 }}>
              {/* <Outlet /> */}
              {openedApps.length > 0 && openedApps.map((app, index) => (<Group style={{ display: currentApp !== app.appInfo.id ? "none" : "block" }}>{app.appRuntime}</Group>))}
            </div>
          </div>
        </div>
      ) : (
        <>
          <LoadingOverlay />
        </>
      )}
    </>
  )

}