import React from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Paypal } from "../../util/Paypal";

const currency = "USD";

function ProductDetail() {
    return (
        <div>
            ProductDetail
            <div style={{ maxWidth: "750px", minHeight: "200px" }}>
                <PayPalScriptProvider
                    options={{
                        "client-id":
                            "AVZH-Ey9Z8PPMlSXt3JLVrjy6e72iJbVeonR3IblDBn8w-EOPNY2VlresIsTmNdz9zoFeVg5ifJG9a3s",
                        components: "buttons",
                        currency: "USD",
                    }}
                >
                    <Paypal currency={currency} showSpinner={false} />
                </PayPalScriptProvider>
            </div>
        </div>
    );
}

export default ProductDetail;
