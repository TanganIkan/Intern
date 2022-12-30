import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './Router.css'
import { BrowserRouter } from "react-router-dom"
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';
import Form from "./pages/Form"
import Alert from './List/alert';
import  App2 from './List/App2';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Alert />
      <Navbar />
      <Routes>
        <Route path="/Intern" element={<App />} />
        <Route path="/form" element={<Form />} />
        <Route path="/list" element={<App2 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);