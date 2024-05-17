import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

//redux
import {
  useSelector,
} from "react-redux";
import {
  createSelector 
} from "@reduxjs/toolkit";

export default function Footer() {
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
      <footer className="bg-dark text-white p-3">
        <Container>
          <Row>
            <Col
              xs="12"
              md="4"
            >
              <div dangerouslySetInnerHTML={{ "__html": data.description.short_content }}></div>
            </Col>
            <Col
              xs="12"
              md="4"
              className="offset-md-2"
            >
              <h5>Liên hệ</h5>
              <p>Địa chỉ: {data.address}</p>
              <p>Điện thoại: {data.phone}</p>
              <p>Email: {data.email}</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  )
};