import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserCart() {
    const token = localStorage.getItem("token");
    const [purchaseIds, setPurchaseIds] = useState([]);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const tokenData = jwt_decode(token);
        const purchaseArray = tokenData.purchase ? tokenData.purchase : "";

        const ids = purchaseArray
            .replace("[", "")
            .replace("]", "")
            .replace(/"/g, "")
            .split(",");

        setPurchaseIds(ids);

        // 각 purchase 항목에 대한 데이터 요청
        const fetchData = async () => {
            const productData = [];
            for (const id of ids) {
                try {
                    const response = await axios.get(`/api/product/${id}`);
                    const product = response.data;
                    if (product && product.id) {
                        productData.push(product);
                    }
                } catch (error) {
                    console.error(
                        `Error fetching product with ID ${id}:`,
                        error
                    );
                }
            }
            setProducts(productData);
        };

        if (ids.length > 0) {
            fetchData();
        }
    }, [token]);

    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`);
    };

    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "flex-start",
            }}
        >
            {products &&
                products.map((product) => (
                    <div
                        key={product.id}
                        style={{
                            width: "20%",
                            margin: "10px",
                            textAlign: "center",
                        }}
                        onClick={() => handleProductClick(product.id)}
                    >
                        {product && product.imagePath && (
                            <img
                                src={product.imagePath}
                                alt={product.name}
                                style={{ width: "200px", height: "200px" }}
                            />
                        )}
                        {product && product.name && <p>{product.name}</p>}
                    </div>
                ))}
        </div>
    );
}

export default UserCart;
