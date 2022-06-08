import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './assets/fonts/walk_the_moon/walkthemoon.ttf';
import './assets/fonts/ethnocentric/ethnocentric rg.otf';
import './assets/fonts/biger_over/bBigerOver.ttf';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Music from './components/Music';
import Navigation from './components/Navigation';
import Radio from './components/Radio';
import Component404 from './components/404';
import Settings from './components/Settings';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="home" element={<Home />} />
          <Route path="music" element={<Music />} />
          <Route path="navigation" element={<Navigation />} />
          <Route path="radio" element={<Radio />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<Component404 />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
