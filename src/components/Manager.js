import '../App.css';
import React from 'react';
import { useState } from 'react';

import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import { BackgroundImage } from '@mantine/core';
import { BackgroundContext } from '../lib/context';

export default function Manager() {

  const [useBackgroundImage, setUseBackgroundImage] = useState(false);
  const [backgroundImageHomeScreenOnly, setBackgroundImageHomeScreenOnly] = useState(true);
  const [backgroundImageBlur, setBackgroundImageBlur] = useState(35);

  return (
    <>
      <div className="App" style={{ display: 'flex' }}  >
        <Navbar></Navbar>


        {/* <div style={{ justifyContent:'center',position:'absolute',right:0,top:0, width:"91%", height:"100%"}}>
                    {this.state.page}
                    
                </div> */}
        <div style={{ height: "100%" }}>
          <BackgroundContext.Provider value={{ useImage:useBackgroundImage, setUseImage:setUseBackgroundImage, blur: backgroundImageBlur, setBlur: setBackgroundImageBlur, homeScreenOnly: backgroundImageHomeScreenOnly, setHomeScreenOnly: setBackgroundImageHomeScreenOnly }}  >
            {useBackgroundImage && !backgroundImageHomeScreenOnly && <BackgroundImage style={{ height: "100%", position: "absolute", filter: `blur(${(15 * (backgroundImageBlur / 100))}px)` }} src="/background.png" />}
            <div style={{ justifyContent: 'center', position: 'absolute', right: 0, top: 0, width: "91%", height: "100%", zIndex: 2 }}>
              <Outlet />
            </div>
          </BackgroundContext.Provider>
        </div>
      </div>
    </>
  )

}