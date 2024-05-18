import React from 'react';
import { Routes, Route } from 'react-router-dom';

//redux
import {
  useSelector,
  useDispatch,
} from "react-redux";
import {
  createSelector 
} from "@reduxjs/toolkit";

//import actions
import {
  getSetting,
} from "./slices/thunks";

import Loader from './components/loader';

const Homepage = React.lazy(() => import('./pages/homepage'));
const Introduction = React.lazy(() => import('./pages/introduction'));

// import Homepage from './pages/homepage';
// import Introduction from './pages/introduction';

export default function App() {
  const dispatch = useDispatch();
  const {
    is_loading,
    is_success,
  } = useSelector(createSelector(
    state => state.Settings,
    (state) => ({
      "is_loading": state.setting.is_loading,
      "is_success": state.setting.is_success,
    })
  ));

  React.useEffect(() => {
    dispatch(getSetting());
  }, []);
  
  return is_loading || !is_success ? (
    <Loader />
  ) : (
    <React.Fragment>
      <React.Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/gioi-thieu" element={<Introduction />} />
        </Routes>
      </React.Suspense>
    </React.Fragment>
  );
};