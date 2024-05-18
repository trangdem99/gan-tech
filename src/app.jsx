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

import setMeta from './utils/setMeta';
import Loader from './components/loader';

const Homepage = React.lazy(() => import('./pages/homepage'));
const Introduction = React.lazy(() => import('./pages/introduction'));
const Products = React.lazy(() => import('./pages/products'));
const ProductDetail = React.lazy(() => import('./pages/products/details'));
const Services = React.lazy(() => import('./pages/services'));
const ServiceDetail = React.lazy(() => import('./pages/services/details'));

export default function App() {
  const dispatch = useDispatch();
  const {
    is_loading,
    is_success,
    data
  } = useSelector(createSelector(
    state => state.Settings,
    (state) => ({
      "is_loading": state.setting.is_loading,
      "is_success": state.setting.is_success,
      "data": state.setting.data,
    })
  ));

  React.useEffect(() => {
    dispatch(getSetting());
  }, []);

  React.useEffect(() => {
    if (is_success) {
      document.title = data.full_name;
      
      setMeta("description", data.description);
      setMeta("keywords", data.keywords);
      setMeta("classification", "Business");
      setMeta("astract", data.full_name);
    }
  }, [data]);

  return is_loading || !is_success ? (
    <Loader />
  ) : (
    <React.Fragment>
      <React.Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/gioi-thieu" element={<Introduction />} />
          <Route path="/san-pham" element={<Products />} />
          <Route path="/san-pham/:slug" element={<ProductDetail />} />
          <Route path="/dich-vu" element={<Services />} />
          <Route path="/dich-vu/:slug" element={<ServiceDetail />} />
        </Routes>
      </React.Suspense>
    </React.Fragment>
  );
};