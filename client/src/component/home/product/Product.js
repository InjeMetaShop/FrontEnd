import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const cards = [1, 2, 3, 4, 5, 6];

const theme = createTheme();

export default function Product() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <main>
                {/* Hero unit */}
                <Container sx={{ py: 8 }}>
                    {/* End hero unit */}
                    <Grid container spacing={4} sx={{ paddingLeft: "1vmax" }}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={16} sm={6} md={4}>
                                <Card
                                    sx={{
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        image="https://source.unsplash.com/random"
                                        alt="random"
                                    />

                                    {/* <div>
                                        <Typography
                                            sx={{ textAlign: "left" }}
                                            variant="h5"
                                            component="h2"
                                        >
                                            상품
                                        </Typography>
                                        <Typography sx={{ textAlign: "left" }}>
                                            상품 설명
                                        </Typography>
                                    </div> */}
                                    {/* <CardActions>
                                      <Button size="small">View</Button>
                                      <Button size="small">Edit</Button>
                                  </CardActions> */}
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </ThemeProvider>
    );
}
