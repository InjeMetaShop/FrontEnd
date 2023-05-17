import * as React from 'react';
import react, {useEffect} from 'react';
import Axios from "axios";
import ProductInfo from './productInfo';
import ProductImage from '.productImage';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function productDetailPage(props) {

  const productId = props.match.params.productId
  const [Product, setProduct] = useState([])

  useEffect(() => {
    Axios.get('/api/product/products_by_id?id=${productId}&type=single')
      .then(response => {
        setProduct(response.data[0])

      })

  }, [])

}

return (
  <div className="postPage" style={{width: '100%', padding: '3rem 4rem'}}>

    <div style={{display:'flex', justifyContent:'center'}}>
      <h1>{Product.title}</h1>
    </div>

    <br />

    <Row gutter={[16, 16]} >

      <Col lg={12} xs={24}>
        <productImage detail={Product}/> 
      </Col>
      <Col lg={12} xs={24}>
        <ProductInfo/>
      </Col>

    </Row>    
  </div>
  
)


