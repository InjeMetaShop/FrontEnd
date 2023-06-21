import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@mui/material";

import LogoutIcon from "@mui/icons-material/Logout";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import BackupOutlinedIcon from "@mui/icons-material/BackupOutlined";
import CloudDoneOutlinedIcon from "@mui/icons-material/CloudDoneOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";

import { useNavigate } from "react-router-dom";
import axios from "axios";

export function ProfileListItems() {
    const navigate = useNavigate();
    return (
        <React.Fragment>
            <ListItemButton
                onClick={() => {
                    navigate("/profile");
                }}
            >
                <ListItemIcon>
                    <PersonOutlineIcon
                        sx={{ color: "#000" }}
                        fontSize="large"
                    />
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
                            나의 콘텐츠
                        </Typography>
                    }
                />
            </ListItemButton>
        </React.Fragment>
    );
}

export function ContentListItems() {
    const navigate = useNavigate();
    return (
        <React.Fragment>
            <ListItemButton
                onClick={() => {
                    navigate("/dashboard");
                }}
            >
                <ListItemIcon>
                    <Inventory2OutlinedIcon
                        sx={{ color: "#000" }}
                        fontSize="large"
                    />
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
                            콘텐츠
                        </Typography>
                    }
                />
            </ListItemButton>
        </React.Fragment>
    );
}

export function UploadListItems() {
    const navigate = useNavigate();
    return (
        <React.Fragment>
            <ListItemButton
                onClick={() => {
                    navigate("/upload");
                }}
            >
                <ListItemIcon>
                    <BackupOutlinedIcon
                        sx={{ color: "#000" }}
                        fontSize="large"
                    />
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
                            콘텐츠 업로드
                        </Typography>
                    }
                />
            </ListItemButton>
        </React.Fragment>
    );
}

export function ApproveListItems() {
    const navigate = useNavigate();
    return (
        <React.Fragment>
            <ListItemButton
                onClick={() => {
                    navigate("/approve");
                }}
            >
                <ListItemIcon>
                    <CloudDoneOutlinedIcon
                        sx={{ color: "#000" }}
                        fontSize="large"
                    />
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
                            콘텐츠 승인
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
                    <SmsOutlinedIcon sx={{ color: "#000" }} fontSize="large" />
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
                            문의하기
                        </Typography>
                    }
                />
            </ListItemButton>
        </React.Fragment>
    );
}

export default function LogoutListItems() {
    const navigate = useNavigate();

    const handleLogout = () => {
        axios
            .post("/api/auth/logout", null, {
                headers: { Authorization: `${localStorage.getItem("token")}` },
            })
            .then(function (response) {
                console.log(response, "로그아웃 성공");
                navigate("/");
                localStorage.removeItem("token");
            });
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
                        로그아웃
                    </Typography>
                }
            />
        </ListItemButton>
    );
}