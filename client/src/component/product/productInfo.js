import React, { useEffect, useState } from "react";

function ProductInfo(props) {
    const [product, setProduct] = useState({});

    useEffect(() => {
        setProduct(props.detail);
    });

    return (
        <div>
            {/* <Descriptions title="Product Info">
                <Descriptions.Item label="Price">
                    {Product.price}
                </Descriptions.Item>
                <Descriptions.Item label="Sold">
                    {Product.sold}
                </Descriptions.Item>
                <Descriptions.Item label="View">
                    {Product.vies}
                </Descriptions.Item>
                <Descriptions.Item label="Description">
                    {Product.description}
                </Descriptions.Item>
            </Descriptions>
            <br />
            <br />
            <br />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Button size="large" shape="round" type="danger" onclick>
                    장바구니
                </Button>
            </div> */}
            상품 상세설명
        </div>
    );
}

export default ProductInfo;
