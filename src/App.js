import './App.css';
import React from 'react';

import Manager from './components/Manager';
import { MantineProvider } from '@mantine/core';

export default function App() {
  return (
    <MantineProvider theme={{ fontFamily: 'Open Sans' }} withGlobalStyles>
      <Manager />
    </MantineProvider>
  );
}

