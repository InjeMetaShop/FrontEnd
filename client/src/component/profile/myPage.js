import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function MyPage() {
  // 자기 아바타 페이지
  function SimplePaper() {
    return (
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
        <Paper elevation={0} />
      </Box>
    );
  }
}

// 구매한 물품들(카트) / 카드
export function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards"
        title="product image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          상품 사진
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">가격</Button>
        <Button size="small">태그</Button>
        <Button size="small">올린이</Button>
      </CardActions>
    </Card>
  );
}
