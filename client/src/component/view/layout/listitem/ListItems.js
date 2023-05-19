import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import LogoutIcon from "@mui/icons-material/Logout";
import InventoryIcon from "@mui/icons-material/Inventory";

import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LogoutListItems() {
    const navigate = useNavigate();

    const handleLogout = () => {
        // axios
        //     .post("/api/auth/logout", null, {
        //         headers: { Authorization: `${localStorage.getItem("token")}` },
        //     })
        //     .then(function (response) {
        //         console.log(response, "로그아웃 성공");
        //         navigate("/");
        //     })
    };

    return (
        <ListItemButton onClick={handleLogout}>
            <ListItemIcon>
                <LogoutIcon sx={{ color: "#000" }} fontSize="large" />
            </ListItemIcon>
            <ListItemText
                disableTypography
                primary={
                    <Typography
                        style={{
                            color: "black",
                            fontSize: "0.9vmax",
                            fontWeight: "600",
                        }}
                    >
                        LOGOUT
                    </Typography>
                }
            />
        </ListItemButton>
    );
}

export function UserListItems() {
    const navigate = useNavigate();
    return (
        <React.Fragment>
            <ListItemButton
                onClick={() => {
                    navigate("/dashboard");
                }}
            >
                <ListItemIcon>
                    <HomeIcon sx={{ color: "#000" }} fontSize="large" />
                </ListItemIcon>
                <ListItemText
                    disableTypography
                    primary={
                        <Typography
                            style={{
                                color: "black",
                                fontSize: "0.9vmax",
                                fontWeight: "600",
                            }}
                        >
                            HOME
                        </Typography>
                    }
                />
            </ListItemButton>

            <ListItemButton
                onClick={() => {
                    navigate("/item");
                }}
            >
                <ListItemIcon>
                    <InventoryIcon sx={{ color: "#000" }} fontSize="large" />
                </ListItemIcon>
                <ListItemText
                    disableTypography
                    primary={
                        <Typography
                            style={{
                                color: "black",
                                fontSize: "0.9vmax",
                                fontWeight: "600",
                            }}
                        >
                            PRODUCT
                        </Typography>
                    }
                />
            </ListItemButton>
        </React.Fragment>
    );
}

export function ConvenienceListItems() {
    const navigate = useNavigate();
    return (
        <React.Fragment>
            <ListItemButton
                onClick={() => {
                    navigate("/guide");
                }}
            >
                <ListItemIcon>
                    <GroupsIcon sx={{ color: "#000" }} fontSize="large" />
                </ListItemIcon>
                <ListItemText
                    disableTypography
                    primary={
                        <Typography
                            style={{
                                color: "black",
                                fontSize: "0.9vmax",
                                fontWeight: "600",
                            }}
                        >
                            가이드
                        </Typography>
                    }
                />
            </ListItemButton>
        </React.Fragment>
    );
}
