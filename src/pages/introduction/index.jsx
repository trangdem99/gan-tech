import React from 'react';

import Layout from '../../layouts';

//redux
import {
  useSelector,
} from "react-redux";
import {
  createSelector 
} from "@reduxjs/toolkit";

export default function Introduction() {
  const {
    data,
  } = useSelector(createSelector(
    state => state.Settings,
    (state) => ({
      "data": state.setting.data,
    })
  ))
  
  return (
    <React.Fragment>
      <Layout>
        <main className="p-1 p-sm-2 p-md-3 p-lg-4" id="main">
          <div className="container">
            <section className="py-5">
              <div dangerouslySetInnerHTML={{__html: data.description.full_content}}></div>
            </section>
          </div>
        </main>
      </Layout>
    </React.Fragment>
  );
}