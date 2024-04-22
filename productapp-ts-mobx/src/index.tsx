import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'

import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

import cartStore from './mobx/CartStore';

import { enableLogging } from 'mobx-logger'
enableLogging();

// initialize the context with cartStore; no need for <Provider>
export const cartContext = createContext(cartStore); // to avoid props-drill

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>

);

