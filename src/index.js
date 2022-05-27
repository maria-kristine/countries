import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './component/Home';
import AllFlags from './component/AllFlags';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/> }>
        <Route path="/home" element={<Home/> }/>
        <Route path="/flag" element={<AllFlags /> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
