import React, { useState, Component } from 'react';  
import logo from './logo.svg';  
import './App.css';  
import SlickDemo from './SlickDemo'  
import LeftPart from './LeftPart'
import ToolBar from './ToolBar'
import Contact from "./Contact"; 
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup'


function App() { 
  return (  
    <div className="App" > 
      <ToolBar/>
      <div className = "content">
        <LeftPart/> 
        <SlickDemo />
      </div>
    </div>  
  );  
}  
  
export default App;