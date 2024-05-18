import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from 'reactstrap';

//redux
import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";

import Image from '../../components/image';
import Layout from '../../layouts';

import './index.css'; // Import the custom CSS file

export default function Products() {
  // State to track the number of visible items
  const [visibleItems, setVisibleItems] = React.useState(8);
  const { data } = useSelector(createSelector(
    state => state.Settings,
    (state) => ({
      "data": state.setting.data,
    })
  ));

  // Handle "Show More" button click
  const showMoreItems = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 8);
  };

  return (
    <React.Fragment>
      <Layout>
        <Container className="p-1 p-sm-2 p-md-3 p-lg-4" id="main">
          <Row>
            {
              data.services.slice(0, visibleItems).map((service, index) => (
                <Col xs="12" sm="6" md="4" lg="3" className="mb-3" key={`service-${index}`}>
                  <Card className="equal-height-card">
                    <Image src={service.image} alt={service.name} className="img-fluid" />
                    <CardBody className="d-flex flex-column">
                      <CardTitle>{service.name}</CardTitle>
                      <CardText className="flex-grow-1" dangerouslySetInnerHTML={{ __html: service.description.short_content }} />
                      <div className="text-center">
                        <Link to={`/dich-vu/${service.slug}`} className="btn btn-primary">Xem chi tiết</Link>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              ))
            }
          </Row>
          {visibleItems < data.services.length && (
            <div className="text-center mt-3">
              <Button onClick={showMoreItems} color="primary">Hiện thị thêm</Button>
            </div>
          )}
        </Container>
      </Layout>
    </React.Fragment>
  );
}
