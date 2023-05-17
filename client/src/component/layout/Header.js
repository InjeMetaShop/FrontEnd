import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function Header() {
    return (
        <React.Fragment>
            <Toolbar
                sx={{
                    borderBottom: "2px solid black", // border의 스타일을 설정합니다.
                    borderColor: "black", // border의 색상을 설정합니다.
                    color: "black",
                    width: "60%", // border의 가로 비율을 조정합니다.
                    margin: "0 auto", // 가운데 정렬을 위해 margin을 설정합니다.
                }}
            >
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    sx={{ flex: 1 }}
                >
                    Meta Shop
                </Typography>
            </Toolbar>
        </React.Fragment>
    );
}

export default Header;
