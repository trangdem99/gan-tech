import React from 'react';
import {
  Col,
  Container,
  Row,
} from 'reactstrap';

//redux
import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";

import Image from '../../components/image';
import Layout from '../../layouts';

export default function Blogs() {
  const { data } = useSelector(createSelector(
    state => state.Settings,
    (state) => ({
      "data": state.setting.data,
    })
  ));

  return (
    <React.Fragment>
      <Layout>

      </Layout>
    </React.Fragment>
  );
}
