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
const Services = React.lazy(() => import('./pages/services'));
const Blogs = React.lazy(() => import('./pages/blogs'));
const Contact = React.lazy(() => import('./pages/contact'));
const SignIn = React.lazy(() => import('./pages/sign-in'));

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
          <Route path="/dich-vu" element={<Services />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/lien-he" element={<Contact />} />
          <Route path="/dang-nhap" element={<SignIn />} />
        </Routes>
      </React.Suspense>
    </React.Fragment>
  );
};