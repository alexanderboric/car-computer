import './App.css';
import React, { useState } from 'react';

import Manager from './components/Manager';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { OverallAppearanceContext } from './lib/context';


export default function App() {

  const [colorScheme, setColorScheme] = useState("dark");
  const [fontFamily, setFontFamily] = useState("default");
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <OverallAppearanceContext.Provider value={{ fontFamily: fontFamily, setFontFamily: setFontFamily }}>
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
      </OverallAppearanceContext.Provider>
    </ColorSchemeProvider>
  );
}

