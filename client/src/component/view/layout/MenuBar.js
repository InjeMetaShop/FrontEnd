import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import StorefrontIcon from "@mui/icons-material/Storefront";
import jwt_decode from "jwt-decode";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import LogoutListItems, {
    ApproveListItems,
    ContentListItems,
    ConvenienceListItems,
    ProfileListItems,
    UploadListItems,
} from "./listitem/ListItems";

const drawerWidth = 240;
const pages = ["Products", "Pricing", "Blog"];

export default function ClippedDrawer() {
    const token = localStorage.getItem("token");
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [role, setRole] = useState("");
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    useEffect(() => {
        const tokenData = jwt_decode(token);
        if (tokenData) {
            setRole(tokenData.role);
        }
    }, []);
    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    background: "#222",
                }}
            >
                <Toolbar>
                    <StorefrontIcon
                        sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "-apple-system",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        INJE META SHOP
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign="center">
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <StorefrontIcon
                        sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
                    />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "-apple-system",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        INJE META SHOP
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth,
                        boxSizing: "border-box",
                        background: "#EEE", // 배경색 설정
                    },
                    display: { xs: "none", md: "block" },
                }}
            >
                <Toolbar />
                <Box
                    sx={{
                        height: "100%",
                        background: "#EEE",
                        overflow: "auto",
                        color: "white",
                    }}
                >
                    <br />
                    <br />
                    <ProfileListItems />
                    <br />

                    <Divider
                        sx={{ borderBottomWidth: "1px", borderColor: "#DDD" }}
                    />
                    <br />

                    <ContentListItems />
                    <br />
                    <Divider
                        sx={{ borderBottomWidth: "1px", borderColor: "#DDD" }}
                    />
                    <br />
                    <UploadListItems />
                    <br />
                    <Divider
                        sx={{ borderBottomWidth: "1px", borderColor: "#DDD" }}
                    />
                    {role === "ROLE_ADMIN" ? (
                        <>
                            <br />
                            <ApproveListItems />
                            <br />
                            <Divider
                                sx={{
                                    borderBottomWidth: "1px",
                                    borderColor: "#DDD",
                                }}
                            />
                        </>
                    ) : (
                        void 0
                    )}

                    {role === "ROLE_USER" ? (
                        <>
                            <br />
                            <ConvenienceListItems />
                        </>
                    ) : (
                        void 0
                    )}
                </Box>
                <LogoutListItems />
                <br />
            </Drawer>
        </Box>
    );
}
