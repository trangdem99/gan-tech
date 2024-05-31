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

export default function Contact() {
  const { data } = useSelector(createSelector(
    state => state.Settings,
    (state) => ({
      "data": state.setting.data,
    })
  ));

  return (
    <React.Fragment>
      <Layout>
        <Container className="mt-5 mb-5">
          <Row>
            <Col xs="12">
              <h1 className="text-center brand-color">Liên hệ</h1>
              <div className="section">
                <p><b>Địa chỉ:</b> {data.address}</p>
                <p><b>Điện thoại:</b> {data.phone}</p>
                <p><b>Email:</b> {data.email}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </Layout>
    </React.Fragment>
  );
}
