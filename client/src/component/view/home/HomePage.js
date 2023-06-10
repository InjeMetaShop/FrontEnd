import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainFeaturedPost from "../layout/post/MainFeaturedPost";
import MenuBar from "../layout/MenuBar";
import { Paper } from "@mui/material";
import Box from "@mui/material/Box";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const mainFeaturedPost = {
  title: "사장이 미쳤어요!!!",
  description: "전품목 99% 할인",
  image: process.env.PUBLIC_URL + "/images/ex.jpg",
  imageText: "main image description",
};

const HorizonLine = () => {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        borderBottom: "1px solid #aaa",
        lineHeight: "0.1em",
        margin: "10px 0 20px",
      }}
    >
      <span style={{ background: "#fff", padding: "0 10px" }}></span>
    </div>
  );
};

const defaultTheme = createTheme();
const mdTheme = createTheme();

export default function HomePage() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  //   const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("/api/product/all")
      .then((response) => {
        const fetchedProducts = response.data;
        setProducts(fetchedProducts);
        console.log(fetchedProducts);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <MenuBar />
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: "flex" }}>
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: "100vh",
            }}
          >
            <div
              className="content"
              style={{
                width: "95%",
                margin: "auto",
                paddingTop: "1vmax",
                paddingLeft: "10vmax",
              }}
              sx={{ mt: 4, mb: 4 }}
            >
              <Grid
                container
                spacing={3}
                style={{
                  width: "100%",
                }}
                paddingTop="3vmax"
              >
                <Grid item xs={12}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: 1000,
                    }}
                  >
                    <MainFeaturedPost post={mainFeaturedPost} />
                    {/* <HorizonLine></HorizonLine> */}
                    <ImageList sx={{ width: 1570 }} cols={5}>
                      {products.map((item) => (
                        <ImageListItem
                          key={item.id}
                          sx={{
                            width: 200,
                            padding: 1,
                          }}
                          onClick={() => {
                            navigate(`/product/${item.id}`, {
                              state: { value: item },
                            });
                          }}
                        >
                          <img
                            src={item.imagePath}
                            alt={item.name}
                            loading="lazy"
                          />
                          <ImageListItemBar
                            title={item.name}
                            subtitle={<span>price: {item.price}</span>}
                            position="below"
                            sx={{
                              "& .MuiImageListItemBar-title": {
                                fontSize: 18,
                              },
                              "& .MuiImageListItemBar-subtitle": {
                                fontSize: 14,
                                fontWeight: "bold",
                              },
                            }}
                          />
                        </ImageListItem>
                      ))}
                    </ImageList>
                  </Paper>
                </Grid>
              </Grid>
            </div>
          </Box>
        </Box>
      </ThemeProvider>
    </ThemeProvider>
  );
}
