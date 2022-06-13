import '../App.css';
import React, { useEffect } from 'react';
import { useState } from 'react';

import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import { BackgroundImage, LoadingOverlay, useMantineColorScheme } from '@mantine/core';
import { BackgroundContext } from '../lib/context';

export default function Manager() {

  const [useBackgroundImage, setUseBackgroundImage] = useState(false);
  const [backgroundImageHomeScreenOnly, setBackgroundImageHomeScreenOnly] = useState(true);
  const [backgroundImageBlur, setBackgroundImageBlur] = useState(35);
  const [settingsLoaded, setSettingsLoaded] = useState(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  useEffect(() => {
    fetch('/api/settings/getAll')
      .then(res => res.json())
      .then(data => {


        /* -- Insert Settings Here -- */
        setUseBackgroundImage(data.useBackgroundImage === 'true');
        setBackgroundImageBlur(Number(data.backgroundImageBlur));
        setBackgroundImageHomeScreenOnly(data.backgroundImageHomeScreenOnly === 'true');
        if (colorScheme !== data.colorScheme) {
          toggleColorScheme();
        }
        /* -- Insert Settings Here -- */


        setSettingsLoaded(true);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  /* -- Insert Settings Effects Here -- */
  useEffect(() => {
    fetch('/api/settings/set?setting=useBackgroundImage&value=' + useBackgroundImage);
  }, [useBackgroundImage]);
  useEffect(() => {
    fetch('/api/settings/set?setting=backgroundImageBlur&value=' + backgroundImageBlur);
  }, [backgroundImageBlur]);
  useEffect(() => {
    fetch('/api/settings/set?setting=backgroundImageHomeScreenOnly&value=' + backgroundImageHomeScreenOnly);
  }, [backgroundImageHomeScreenOnly]);
  useEffect(() => {
    fetch('/api/settings/set?setting=colorScheme&value=' + colorScheme);
  }, [colorScheme]);
  /* -- Insert Settings Effects Here -- */


  return (
    <>
    {settingsLoaded ? (
      <div className="App" style={{ display: 'flex', userSelect: "none", WebkitUserSelect: "none" }}  >
        <Navbar></Navbar>


        {/* <div style={{ justifyContent:'center',position:'absolute',right:0,top:0, width:"91%", height:"100%"}}>
                    {this.state.page}
                    
                </div> */}
        <div style={{ height: "100%" }}>
          <BackgroundContext.Provider value={{ useImage: useBackgroundImage, setUseImage: setUseBackgroundImage, blur: backgroundImageBlur, setBlur: setBackgroundImageBlur, homeScreenOnly: backgroundImageHomeScreenOnly, setHomeScreenOnly: setBackgroundImageHomeScreenOnly }}  >
            {useBackgroundImage && !backgroundImageHomeScreenOnly && <BackgroundImage style={{ height: "100%", position: "absolute", filter: `blur(${(15 * (backgroundImageBlur / 100))}px)` }} src="/background.png" />}
            <div style={{ justifyContent: 'center', position: 'absolute', right: 0, top: 0, width: "91%", height: "100%", zIndex: 2 }}>
              <Outlet />
            </div>
          </BackgroundContext.Provider>
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