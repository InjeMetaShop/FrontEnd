import { useEffect, useState } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import jwt_decode from "jwt-decode";
// This values are the props in the UI
const amount = "100";
const style = { layout: "vertical" };

export function Paypal({ currency, showSpinner, productId }) {
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
    const [email, setEmail] = useState("")
    const token = localStorage.getItem("token");

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

    }, [])

    return (
        <>
            {showSpinner && isPending && <div className="spinner" />}
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: amount,
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
                        const itemId = productId; // Replace with the actual item ID
                        const userEmail = "{userEmail}"; // Replace with the actual user email
                        fetch(`/api/purchase/item/${itemId}/${email}`, {
                            method: "POST",
                            // Add any headers or body parameters as needed
                        })
                        .then(response => {
                            // Handle the response
                        })
                        .catch(error => {
                            // Handle the error
                        });
                    });
                }}
            />
        </>
    );
}
