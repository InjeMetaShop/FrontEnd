import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainFeaturedPost from "../layout/post/MainFeaturedPost";
import MenuBar from "../layout/MenuBar";
import { Paper } from "@mui/material";
import Box from "@mui/material/Box";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

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

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
const mdTheme = createTheme();

export default function HomePage() {
  //   const navigate = useNavigate();

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
                {/* 멤버 */}
                <Grid item xs={12}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: 900,
                    }}
                  >
                    <MainFeaturedPost post={mainFeaturedPost} />
                    <HorizonLine></HorizonLine>
                    <ImageList sx={{ width: 1570 }} cols={5}>
                      {itemData.map((item) => (
                        <ImageListItem
                          key={item.img}
                          sx={{ width: 300, padding: 1 }}
                          //   onClick={() => {
                          //     navigate("/item");
                          //   }}
                        >
                          <img
                            src={`${item.img}?w=164&h=164&fit=cover&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=cover&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                          />
                          <ImageListItemBar
                            title={item.title}
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

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    price: "1000",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    price: "2000",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    price: "3000",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    price: "4000",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    price: "5000",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    price: "6000",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    price: "7000",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    price: "8000",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    price: "9000",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    price: "10000",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    price: "11000",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    price: "12000",
  },
];
