import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';

import rootReducer from "./slices";

const Loader = React.lazy(() => import('./components/loader'));
const App = React.lazy(() => import('./app'));

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({
  "reducer": rootReducer,
  "devTools": process.env.NODE_ENV !== "production", 
})

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.Suspense fallback={<Loader />}>
        <App />
      </React.Suspense>
    </BrowserRouter>
  </Provider>
);