import React from 'react';
import {
  Button,
  Col,
  Container,
  Row,
} from 'reactstrap';

// redux
import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";

import Layout from '../../layouts';
import Image from '../../components/image';

export default function Homepage() {
  // State to track the number of visible items
  const [visibleItems, setVisibleItems] = React.useState(4);
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
        <Container fluid className="p-0">
          <Row className="justify-content-center m-0">
            <Col xs="12" className="full-screen-image p-0">
              <Image src={data.homepage.image} alt={data.short_name} className="img-fluid" />
              <center>
                <div className="caption-container">
                  <h2>{data.homepage.title}</h2>
                </div>
              </center>
            </Col>
          </Row>
        </Container>

        <Container className="mt-5 mb-5">
          <Row>
            <Col xs="12">
              <h1 className="text-center brand-color">{data.homepage.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: data.homepage.content }}></div>
            </Col>
          </Row>
        </Container>

        {
          data.homepage.products.slice(0, visibleItems).map((product, product_index) => (
            <Container className="mt-5 mb-5" key={`product-${product_index}`}>
              <Row>
                <Col xs="12">
                  <h1 className="brand-color" dangerouslySetInnerHTML={{ __html: product.content }}></h1>
                  <Row className="mt-3 justify-content-center">
                    {
                      product.images.map((image, image_index) => (
                        <Col xs="12" md="6" key={`product-${product_index}-image-${image_index}`} className="mt-3 text-center">
                          <Image src={image} alt="Hình ảnh" className="img-fluid" />
                        </Col>
                      ))
                    }
                  </Row>
                </Col>
              </Row>

            </Container>
          ))
        }
        {visibleItems < data.homepage.products.length && (
          <div className="text-center mt-3">
            <Button onClick={showMoreItems} color="primary">Hiển thị thêm</Button>
          </div>
        )}
      </Layout>
    </React.Fragment>
  );
};
