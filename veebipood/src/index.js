import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import 'leaflet/dist/leaflet.css';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

// Navigeerimiseks (route-miseks) on vajalik:
// 1. npm install react-router-dom (paneme node_modules kausta 
//        navigeerimiseks vajalikud koodijupid)
// 2. impordime index.js failis node_modules kaustast BrowserRouteri
// 3. ümbritseme index.js failis <App/> faili BrowserRouteriga
// 4. Lähme App.js faili ja teeme URLi ja HTMLi vahelisi seoseid

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
