import './App.css';
import React, { useState } from 'react';

import Manager from './components/Manager';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';


export default function App() {

  const [colorScheme, setColorScheme] = useState("dark");
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles defaultProps={{
                Notification: { radius: "lg" },
                Paper: { radius: "lg", p: "md", shadow: "md", withBorder: true },
              }}>
        <Manager />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

