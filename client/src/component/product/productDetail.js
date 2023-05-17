import * as React from 'react';
import react, { useEffect, useState } from "react";
import Axios from "axios";
import ProductInfo from "./ProductInfo";
export default function ProductDetailPage(props) {
    const productId = props.match.params.productId; // getParam
    const [product, setProduct] = useState([]);

    useEffect(() => {
        Axios.get(
            "/api/product/products_by_id?id=${productId}&type=single"
        ).then((response) => {
            setProduct(response.data[0]);
        });
    }, []);

    return (
        <div
            className="postPage"
            style={{ width: "100%", padding: "3rem 4rem" }}
        >
            <div style={{ display: "flex", justifyContent: "center" }}>
                <h1>{product.title}</h1>
            </div>

            <br />

            {/* <Row gutter={[16, 16]}>
                <Col lg={12} xs={24}>
                    <ProductImage detail={product} />
                </Col>
                <Col lg={12} xs={24}>
                    <ProductInfo />
                </Col>
            </Row> */}
        </div>
    );
}

