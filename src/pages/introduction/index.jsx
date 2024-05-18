import React from 'react';
import {
  Container,
} from 'reactstrap';
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
        <Container className="p-1 p-sm-2 p-md-3 p-lg-4" id="main">
          <div dangerouslySetInnerHTML={{__html: data.description.full_content}} className="py-5"></div>
        </Container>
      </Layout>
    </React.Fragment>
  );
}