import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainFeaturedPost from "./post/MainFeaturedPost";
import Product from "./product/Product";
import MenuBar from "../layout/MenuBar";

const mainFeaturedPost = {
    title: "Meta 쇼핑몰",
    description: "content",
    image: "https://source.unsplash.com/random?wallpapers",
    imageText: "main image description",
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function HomePage() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <MenuBar />
            <Container maxWidth="lg">
                <br />
                <main>
                    <MainFeaturedPost post={mainFeaturedPost} />
                    <Grid container spacing={4}>
                        {/* {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))} */}
                        <Product />
                    </Grid>
                </main>
            </Container>
        </ThemeProvider>
    );
}
