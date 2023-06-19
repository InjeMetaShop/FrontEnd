import React from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Paypal } from "../../util/Paypal";
import ModelRender from "./ModelRender";
import Grid from "@mui/material/Grid";
import Carousel from "react-material-ui-carousel";
import { useLocation } from "react-router-dom";

const currency = "USD";

function ProductDetail(props) {
    const location = useLocation();
    const product = location.state.value;

    return (
        <Grid container spacing={2} sx={{ margin: "auto" }}>
            <Grid item xs={6}>
                <ModelRender />
            </Grid>

            <Grid item xs={6} sx={{ margin: "auto" }}>
                <div style={{ justifyContent: "flex-end" }}>
                    {/*
                    <Carousel>
                        {sources.map((item) => (
  	                    <Paper key={item.id}>
    	                <img src={item.src} alt='' />
                        </Paper>))}
                    </Carousel>
                    */}
                    <Carousel>
                        <img
                            src={process.env.PUBLIC_URL + "/images/ex.jpg"}
                            style={{ width: 800, height: 500 }}
                        />
                        <img
                            src={process.env.PUBLIC_URL + "/images/pre.jpg"}
                            style={{ width: 800, height: 500 }}
                        />
                        <img
                            src={process.env.PUBLIC_URL + "/images/pre2.jpg"}
                            style={{ width: 800, height: 500 }}
                        />
                    </Carousel>
                    <Grid item xs={3} sx={{ margin: "auto" }}>
                        <div>{product.name}</div>
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
