
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './assets/fonts/walk_the_moon/walkthemoon.ttf';
import './assets/fonts/ethnocentric/ethnocentric rg.otf';
import './assets/fonts/biger_over/bBigerOver.ttf';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Music from './pages/Music';
import Navigation from './pages/Navigation';
import Radio from './pages/Radio';
import Component404 from './pages/404';
import Settings from './components/settings/settingspages/Settings';
import AppearanceSettings from './components/settings/settingspages/Appearance';
import ConnectivityPage from './components/settings/settingspages/Connectivity';
import WifiSelectionPage from './components/settings/settingspages/WifiSelection';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<Home />} />
          <Route path="music" element={<Music />} />
          <Route path="navigation" element={<Navigation />} />
          <Route path="radio" element={<Radio />} />
          <Route path="settings" element={<Settings />} >
            <Route path="appearance" element={<AppearanceSettings />} />
            <Route path="connectivity" element={<ConnectivityPage />} />
            <Route path="wifi" element={<WifiSelectionPage />} />
          </Route>
          <Route path="*" element={<Component404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
