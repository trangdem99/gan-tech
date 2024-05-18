import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';

import rootReducer from "./slices";

import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({
  "reducer": rootReducer,
  "devTools": process.env.NODE_ENV !== "production", 
})

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);