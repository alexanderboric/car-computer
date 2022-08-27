import '../../App.css';
import { useContext } from 'react';

import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import { BackgroundImage, LoadingOverlay } from '@mantine/core';
import { SettingsContext } from '../../lib/context';
import * as React from 'react';
import AppView from './AppView';

export default function Manager() {


  const { settingsLoaded, useBackgroundImage, backgroundImageHomeScreenOnly, backgroundImageBlur } = useContext(SettingsContext);


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
              <AppView app={{
                id: "builtin-error",
                startUiPath: "notFound",
                name: "Error",
                homeName: "Error",
                iconPath: "/error.png",
                startComponentName: "notFound",
                systemApp: true,
              }} />
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