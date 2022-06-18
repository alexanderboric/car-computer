import './App.css';
import React, { useState, useEffect } from 'react';

import Manager from './components/core/Manager';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { SettingsContext, WifiContext } from './lib/context';


export default function App() {




  const [useBackgroundImage, setUseBackgroundImage] = useState(false);
  const [backgroundImageHomeScreenOnly, setBackgroundImageHomeScreenOnly] = useState(true);
  const [backgroundImageBlur, setBackgroundImageBlur] = useState(35);
  const [settingsLoaded, setSettingsLoaded] = useState(false);
  const [colorScheme, setColorScheme] = useState("dark");
  const [fontFamily, setFontFamily] = useState("default");


  const [OSKButtonSize, setOSKButtonSize] = useState(4);
  const [OSKButtonRadius, setOSKButtonRadius] = useState(1);

  const [enableOpenDrop, setEnableOpenDrop] = useState(false);
  const [openDropDisplayName, setOpenDropDisplayName] = useState("Jarvis");

  const [enableWifi, setEnableWifi] = useState(false);

  useEffect(() => {
    fetch('/api/settings/getAll')
      .then(res => res.json())
      .then(data => {


        /* -- Insert Settings Here -- */


        /* -- Background -- */
        setUseBackgroundImage(data.useBackgroundImage === 'true');
        setBackgroundImageBlur(Number(data.backgroundImageBlur));
        setBackgroundImageHomeScreenOnly(data.backgroundImageHomeScreenOnly === 'true');
        /* -- Background -- */

        /* -- On Screen Keyboard -- */
        setOSKButtonSize(Number(data.OSKButtonSize));
        setOSKButtonRadius(Number(data.OSKButtonRadius));
        /* -- On Screen Keyboard -- */

        /* -- Font -- */
        setFontFamily(data.fontFamily);
        /* -- Font -- */

        /* -- Color Scheme -- */
        if (colorScheme !== data.colorScheme) {
          toggleColorScheme();
        }
        /* -- Color Scheme -- */

        /* -- Open Drop -- */
        setEnableOpenDrop(data.enableOpenDrop === 'true');
        setOpenDropDisplayName(data.openDropDisplayName);
        /* -- Open Drop -- */

        /* -- Wifi -- */
        setEnableWifi(data.enableWifi === 'true');
        /* -- Wifi -- */


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
  useEffect(() => {
    fetch('/api/settings/set?setting=enableOpenDrop&value=' + enableOpenDrop);
  }, [enableOpenDrop]);
  useEffect(() => {
    fetch('/api/settings/set?setting=openDropDisplayName&value=' + openDropDisplayName);
  }, [openDropDisplayName]);
  useEffect(() => {
    fetch('/api/settings/set?setting=enableWifi&value=' + enableWifi);
  }, [enableWifi]);
  /* -- Insert Settings Effects Here -- */



  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <SettingsContext.Provider value={{
        /* -- Font -- */
        fontFamily: fontFamily,
        setFontFamily: setFontFamily,
        /* -- Font -- */

        /* -- On Screen Keyboard -- */
        OSKButtonSize: OSKButtonSize,
        setOSKButtonSize: setOSKButtonSize,
        OSKButtonRadius: OSKButtonRadius,
        setOSKButtonRadius: setOSKButtonRadius,
        /* -- On Screen Keyboard -- */

        /* -- Background Image -- */
        useBackgroundImage: useBackgroundImage,
        setUseBackgroundImage: setUseBackgroundImage,
        backgroundImageBlur: backgroundImageBlur,
        setBackgroundImageBlur: setBackgroundImageBlur,
        backgroundImageHomeScreenOnly: backgroundImageHomeScreenOnly,
        setBackgroundImageHomeScreenOnly: setBackgroundImageHomeScreenOnly,
        /* -- Background Image -- */

        /* -- Open Drop -- */
        enableOpenDrop: enableOpenDrop,
        setEnableOpenDrop: setEnableOpenDrop,
        openDropDisplayName: openDropDisplayName,
        setOpenDropDisplayName: setOpenDropDisplayName,
        /* -- Open Drop -- */

        /* -- Wifi -- */
        enableWifi: enableWifi,
        setEnableWifi: setEnableWifi,
        /* -- Wifi -- */

        /* -- Misc -- */
        settingsLoaded: settingsLoaded
        /* -- Misc -- */
      }}>
        <WifiContext.Provider value={{
          getStatus: () => {
            const request = new XMLHttpRequest();
            request.open('GET', '/api/wifi/status', false);
            request.send(null);
            return JSON.parse(request.responseText).value;
          },
          getNetworks: () => {
            const request = new XMLHttpRequest();
            request.open('GET', '/api/wifi/networks', false);
            request.send(null);
            return JSON.parse(request.responseText).value;
          },
          getConnectedNetworks: () => {
            const request = new XMLHttpRequest();
            request.open('GET', '/api/wifi/current', false);
            request.send(null);
            return JSON.parse(request.responseText).value;
          },
          start: () => { 
            fetch('/api/wifi/start');
          },
          stop: () => {
            fetch('/api/wifi/stop');
          },
        }}>
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
        </WifiContext.Provider>
      </SettingsContext.Provider>
    </ColorSchemeProvider>
  );
}

