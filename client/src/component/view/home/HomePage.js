import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainFeaturedPost from "./post/MainFeaturedPost";
import MenuBar from "../layout/MenuBar";
import { Paper } from "@mui/material";
import Box from "@mui/material/Box";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const mainFeaturedPost = {
    title: "사장이 미쳤어요!!!",
    description: "전품목 99% 할인",
    image: process.env.PUBLIC_URL + "/images/ex.jpg",
    imageText: "main image description",
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
const mdTheme = createTheme();

export default function HomePage() {
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
                                            height: 825,
                                        }}
                                    >
                                        <MainFeaturedPost
                                            post={mainFeaturedPost}
                                        />
                                        <ImageList
                                            sx={{ width: 500, height: 450 }}
                                            cols={3}
                                            rowHeight={164}
                                        >
                                            {itemData.map((item) => (
                                                <ImageListItem key={item.img}>
                                                    <img
                                                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                                        alt={item.title}
                                                        loading="lazy"
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
    },
    {
        img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        title: "Burger",
    },
    {
        img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
        title: "Camera",
    },
    {
        img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
        title: "Coffee",
    },
    {
        img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
        title: "Hats",
    },
    {
        img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
        title: "Honey",
    },
    {
        img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
        title: "Basketball",
    },
    {
        img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
        title: "Fern",
    },
    {
        img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
        title: "Mushrooms",
    },
    {
        img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
        title: "Tomato basil",
    },
    {
        img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
        title: "Sea star",
    },
    {
        img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
        title: "Bike",
    },
];
