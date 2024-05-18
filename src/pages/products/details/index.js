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

export default function ProductDetail() {
  const {
    slug,
  } = useParams();
  const [product, setProduct] = React.useState(null);
  const {
    data,
  } = useSelector(createSelector(
    state => state.Settings,
    (state) => ({
      "data": state.setting.data,
    })
  ))
  
  React.useEffect(() => {
    const found_product = data.products.find((product) => product.slug === slug);

    if (found_product) {
      setProduct(found_product);
    }
    else {
      setProduct(null);
    }
  }, [slug, data.products]);
  
  return (
    <React.Fragment>
      <Layout>
        <Container className="p-1 p-sm-2 p-md-3 p-lg-4" id="main">
          {
            product ? (
              <React.Fragment>
                <div className="text-center">
                  <Image src={product.image} alt={product.name} className="img-fluid" />
                </div>
                <div className="mt-3 text-center">
                  <h1 className="font-semibold">{product.name}</h1>
                </div>
                <div className="mt-3" dangerouslySetInnerHTML={{__html: product.description.full_content}}></div>
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