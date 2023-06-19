import React, { useEffect } from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Paypal } from "../../util/Paypal";
import ModelRender from "./ModelRender";
import Grid from "@mui/material/Grid";
import Carousel from "react-material-ui-carousel";
import { useLocation } from "react-router-dom";
import axios from "axios";

const currency = "USD";

function ProductDetail() {
    const location = useLocation();
    const product = location.state.value;

    useEffect(() => {}, []);

    return (
        <Grid container spacing={2} sx={{ margin: "auto" }}>
            <Grid item xs={6}>
                <ModelRender />
            </Grid>

            <Grid item xs={6} sx={{ margin: "auto" }}>
                <div style={{ justifyContent: "flex-end" }}>
                    <Carousel>
                        <img
                            src={product.imagePath}
                            style={{ width: 800, height: 500 }}
                        />
                    </Carousel>
                    <Grid item xs={3} sx={{ margin: "auto" }}>
                        <h1>{product.name}</h1>
                        <div>{product.price}</div>
                    </Grid>

                    <Grid item xs={6} sx={{ margin: "auto" }}>
                        <div
                            style={{
                                maxWidth: "500px",
                                minHeight: "200px",
                                width: "100%",
                                paddingTop: "50px",
                                margin: "auto",
                            }}
                        >
                            <PayPalScriptProvider
                                options={{
                                    "client-id":
                                        "AVZH-Ey9Z8PPMlSXt3JLVrjy6e72iJbVeonR3IblDBn8w-EOPNY2VlresIsTmNdz9zoFeVg5ifJG9a3s",
                                    components: "buttons",
                                    currency: "USD",
                                }}
                            >
                                <Paypal
                                    currency={currency}
                                    showSpinner={false}
                                />
                            </PayPalScriptProvider>
                        </div>
                    </Grid>
                </div>
            </Grid>
        </Grid>
    );
}

export default ProductDetail;
