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

export default function Services() {
  const { data } = useSelector(createSelector(
    state => state.Settings,
    (state) => ({
      "data": state.setting.data,
    })
  ));

  return (
    <React.Fragment>
      <Layout>
        <Container fluid className="p-0">
          <Row className="justify-content-center m-0">
            <Col xs="12" className="full-screen-image p-0">
              <Image src={data.services.image} alt={data.short_name} className="img-fluid" />
              <center>
                <div className="caption-container">
                  <h2>{data.services.title}</h2>
                </div>
              </center>
            </Col>
          </Row>
        </Container>

        <Container className="mt-5 mb-5">
          <Row>
            <Col xs="12">
              <h1 className="text-center brand-color">{data.services.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: data.services.content }}></div>
            </Col>
          </Row>
        </Container>
      </Layout>
    </React.Fragment>
  );
}
