import { useEffect, useState } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const style = { layout: "vertical" };

export function Paypal({ currency, showSpinner, productId, price }) {
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
    const [email, setEmail] = useState("");
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const [convertedPrice, setConvertedPrice] = useState(null);

    const handleLogOut = () => {
        axios
            .post("/api/auth/logout", null, {
                headers: {
                    Authorization: token,
                },
            })
            .then(() => {
                localStorage.removeItem("token");
                // 추가적인 동작을 수행하세요
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [currency, showSpinner]);

    useEffect(() => {
        const tokenData = jwt_decode(token);
        if (tokenData) {
            setEmail(tokenData.email);
        }
    }, []);

    useEffect(() => {
        const fetchExchangeRate = async () => {
            try {
                const response = await axios.get(
                    "https://api.exchangerate-api.com/v4/latest/USD"
                );
                const exchangeRate = response.data.rates.KRW;
                const convertedPrice = (price / exchangeRate).toFixed(2);
                setConvertedPrice(convertedPrice);
            } catch (error) {
                console.error(error);
            }
        };

        fetchExchangeRate();
    }, [price]);

    return (
        <>
            {showSpinner && isPending && <div className="spinner" />}
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[price, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: "USD",
                                        value: convertedPrice || price,
                                    },
                                },
                            ],
                        })
                        .then((orderId) => {
                            // Your code here after create the order
                            return orderId;
                        });
                }}
                onApprove={function (data, actions) {
                    return actions.order.capture().then(function () {
                        // Your code here after capture the order
                        const itemId = productId;
                        axios
                            .post(
                                `/api/purchase/item/${itemId}/${email}`,
                                null,
                                {
                                    headers: {
                                        Authorization: `${token}`,
                                    },
                                }
                            )
                            .then(() => {
                                alert(
                                    "상품 결제가 완료되었습니다. 다시 로그인 해주세요!"
                                );
                                handleLogOut();
                                navigate("/");
                            });
                    });
                }}
            />
        </>
    );
}
