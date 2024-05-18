import React from 'react';
import {
  useParams,
} from "react-router-dom";
import {
  Container,
  Row,
} from 'reactstrap';
import Layout from '../../../layouts';

//redux
import {
  useSelector,
} from "react-redux";
import {
  createSelector 
} from "@reduxjs/toolkit";
import Image from '../../../components/image';

export default function ServiceDetail() {
  const {
    slug,
  } = useParams();
  const [service, setService] = React.useState(null);
  const {
    data,
  } = useSelector(createSelector(
    state => state.Settings,
    (state) => ({
      "data": state.setting.data,
    })
  ))
  
  React.useEffect(() => {
    const found_service = data.services.find((service) => service.slug === slug);

    if (found_service) {
      setService(found_service);
    }
    else {
      setService(null);
    }
  }, [slug, data.services]);
  
  return (
    <React.Fragment>
      <Layout>
        <Container className="p-1 p-sm-2 p-md-3 p-lg-4" id="main">
          {
            service ? (
              <React.Fragment>
                <div className="text-center">
                  <Image src={service.image} alt={service.name} className="img-fluid" />
                </div>
                <div className="mt-3 text-center">
                  <h1 className="font-semibold">{service.name}</h1>
                </div>
                <div className="mt-3" dangerouslySetInnerHTML={{__html: service.description.full_content}}></div>
              </React.Fragment>
            ) : (
              <h1 className="text-center">Không tìm thấy sản phẩm</h1>
            )
          }
        </Container>
      </Layout>
    </React.Fragment>
  );
}