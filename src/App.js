import './App.css';
import React, { useState, useEffect } from 'react';

import Manager from './components/Manager';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { SettingsContext } from './lib/context';


export default function App() {




  const [useBackgroundImage, setUseBackgroundImage] = useState(false);
  const [backgroundImageHomeScreenOnly, setBackgroundImageHomeScreenOnly] = useState(true);
  const [backgroundImageBlur, setBackgroundImageBlur] = useState(35);
  const [settingsLoaded, setSettingsLoaded] = useState(false);
  const [colorScheme, setColorScheme] = useState("dark");
  const [fontFamily, setFontFamily] = useState("default");


  const [OSKButtonSize, setOSKButtonSize] = useState(4);
  const [OSKButtonRadius, setOSKButtonRadius] = useState(1);

  useEffect(() => {
    fetch('/api/settings/getAll')
      .then(res => res.json())
      .then(data => {


        /* -- Insert Settings Here -- */
        setUseBackgroundImage(data.useBackgroundImage === 'true');
        setBackgroundImageBlur(Number(data.backgroundImageBlur));
        setBackgroundImageHomeScreenOnly(data.backgroundImageHomeScreenOnly === 'true');
        setOSKButtonSize(Number(data.OSKButtonSize));
        setOSKButtonRadius(Number(data.OSKButtonRadius));
        setFontFamily(data.fontFamily);
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
  useEffect(() => {
    fetch('/api/settings/set?setting=OSKButtonSize&value=' + OSKButtonSize);
  }, [OSKButtonSize]);
  useEffect(() => {
    fetch('/api/settings/set?setting=OSKButtonRadius&value=' + OSKButtonRadius);
  }, [OSKButtonRadius]);
  useEffect(() => {
    fetch('/api/settings/set?setting=fontFamily&value=' + fontFamily);
  }, [fontFamily]);
  /* -- Insert Settings Effects Here -- */



  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <SettingsContext.Provider value={{ fontFamily: fontFamily, setFontFamily: setFontFamily, buttonSize: OSKButtonSize, setButtonSize: setOSKButtonSize, buttonRadius: OSKButtonRadius, setButtonRadius: setOSKButtonRadius, useBackgroundImage: useBackgroundImage, setUseBackgroundImage: setUseBackgroundImage, backgroundImageBlur: backgroundImageBlur, setBackgroundImageBlur: setBackgroundImageBlur, backgroundImageHomeScreenOnly: backgroundImageHomeScreenOnly, setBackgroundImageHomeScreenOnly: setBackgroundImageHomeScreenOnly, settingsLoaded: settingsLoaded }}>
        <MantineProvider theme={{
          colorScheme,
          fontFamily: fontFamily !== "default" ? fontFamily : undefined,
        }} withGlobalStyles defaultProps={{
          Notification: { radius: "lg" },
          Paper: { radius: "lg", p: "md", shadow: "md", withBorder: true },
        }}>
          <ModalsProvider>
            <Manager />
          </ModalsProvider>
        </MantineProvider>
      </SettingsContext.Provider>
    </ColorSchemeProvider>
  );
}

