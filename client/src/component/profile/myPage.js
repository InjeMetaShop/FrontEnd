import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// 유저 이름(수정가능하게) / 텍스트 필드
<TextField id="outlined-basic" label="Outlined" variant="outlined" />;

// 유저 프로필사진
<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />;

// 구매한 물품들 / 카드
export default function MyPage() {
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