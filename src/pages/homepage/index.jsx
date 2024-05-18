import React from 'react';
import {
  Carousel,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  Col,
  Container,
  Row,
} from 'reactstrap';

//redux
import {
  useSelector,
} from "react-redux";
import {
  createSelector 
} from "@reduxjs/toolkit";

import Layout from '../../layouts';

import './index.css';

export default function Homepage() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const {
    data,
  } = useSelector(createSelector(
    state => state.Settings,
    (state) => ({
      "data": state.setting.data,
    })
  ))

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === data.carousels.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? data.carousels.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  return (
    <React.Fragment>
      <Layout>
        <div className="p-1 p-sm-2 p-md-3 p-lg-4">
          <Container fluid className="mt-5 mb-5">
            <Row className="justify-content-center">
              <Col xs="11">
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                  ride="carousel"
                  interval={5000}
                  className="text-center"
                >
                  <CarouselIndicators items={data.carousels} activeIndex={activeIndex} onClickHandler={goToIndex} />
                  {
                    data.carousels.map((carousel, index) => {
                      return (
                        <CarouselItem
                          onExiting={() => setAnimating(true)}
                          onExited={() => setAnimating(false)}
                          key={`carousel-${index}`}
                        >
                          <img src={carousel.image} alt={carousel.title} className="img-fluid" />
                        </CarouselItem>
                      )
                    })
                  }
                  <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                  <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                </Carousel>
              </Col>
            </Row>
          </Container>
        </div>
        {
          data.services.map((service, index) => (
            <Container className="mt-5 mb-5" key={`service-${index}`}>
              <Row>
                <Col
                  xs="12"
                  md="6"
                  className={`py-3 py-md-4 ${index % 2 === 0 ? "order-md-last" : ""}`}
                >
                  <img src={service.image} alt={service.name} className="img-fluid" />
                </Col>
                <Col
                  xs="12"
                  md="6"
                  className={`py-3 py-md-4 ${index % 2 === 0 ? "order-md-first" : ""}`}
                >
                  <h1>{service.description.title}</h1>
                  <div dangerouslySetInnerHTML={{__html: service.description.short_content}}></div>
                </Col>
              </Row>
            </Container>
          ))
        }
      </Layout>
    </React.Fragment>
  );
};