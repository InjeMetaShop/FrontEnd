import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import axios from "axios";
import MainFeaturedPost from "../layout/post/MainFeaturedPost";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

function HomeDetail() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(1);

  useEffect(() => {
    axios
      .get("/api/product/all")
      .then((response) => {
        const fetchedProducts = response.data;
        setProducts(fetchedProducts);
        setCount(Math.ceil(fetchedProducts.length / 10));
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const displayedProducts = products.slice(
    (currentPage - 1) * 10,
    currentPage * 10
  );

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Grid item xs={12} height={250}>
        <MainFeaturedPost post={mainFeaturedPost} />
      </Grid>
      {/* <HorizonLine></HorizonLine> */}
      <Grid paddingLeft={5}>
        <ImageList sx={{ width: 1750 }} cols={5}>
          {displayedProducts.map((item) => (
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
              <img src={item.imagePath} alt={item.name} loading="lazy" />
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
      </Grid>
      <Stack spacing={2} alignItems={"center"}>
        <Pagination
          count={count}
          size="large"
          page={currentPage}
          onChange={handlePageChange}
        />
      </Stack>
    </div>
  );
}

export default HomeDetail;

const mainFeaturedPost = {
  title: "사장이 미쳤어요!!!",
  description: "전품목 99% 할인",
  image: process.env.PUBLIC_URL + "/images/ex.jpg",
  imageText: "main image description",
};

// const HorizonLine = () => {
//   return (
//     <div
//       style={{
//         width: "100%",
//         textAlign: "center",
//         borderBottom: "1px solid #aaa",
//         lineHeight: "0.1em",
//         margin: "10px 0 20px",
//       }}
//     >
//       <span style={{ background: "#fff", padding: "0 10px" }}></span>
//     </div>
//   );
// };
