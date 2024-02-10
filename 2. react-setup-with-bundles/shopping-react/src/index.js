import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Login } from './components/login/login';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import * as bootstrap from "bootstrap";
import { DataBinding } from './components/data-binding/data-binding';
import $ from "jquery";
import { NasaAPI } from './components/nasa-api/nasa-api';
import { TwoWayBinding } from './components/two-way-binding/two-way-binding';
import { StyleDemo } from './components/style-demp/style-demo';
import { EventDemo } from './components/event-demo/event-demo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EventDemo />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
