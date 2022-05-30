import './App.css';
import ReactDOM from "react-dom";
import React, { useRef, useState,Suspense, Component, } from 'react';

import Home from './components/Home'
import Music from './components/Music'
import Navbar from './components/Navbar';
import Settings from './components/Settings'
import Radio from './components/Radio'
import Manager from './components/Manager';

export default function App() {
  return (
    <Manager></Manager>
  );
}

