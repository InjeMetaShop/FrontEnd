import React from "react";
import HomeAppBar from "../layout/HomeAppBar";
import "./intro.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function Intro() {
    const navigate = useNavigate();
    return (
        <div className="bg">
            <video className="video" autoPlay loop muted>
                <source src={process.env.PUBLIC_URL + "/images/pre.mp4"} />
            </video>
            {/* <img
                src={process.env.PUBLIC_URL + "/images/pre2.jpg"}
                className="video"
                style={{
                    width: "100%",
                    height: "100%",
                }}
            ></img> */}

            {/* 둘중에 뭐할지 골라야됨 */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                }}
            >
                <Button
                    style={{
                        fontFamily: "-apple-system",
                        fontWeight: 500,
                        color: "white",
                        fontSize: "1vmax",
                        textAlign: "center",
                        border: "2px solid white",
                        background: "#000",
                        borderRadius: 10,
                    }}
                    onClick={() => {
                        // TODO 로그인창으로 넘어가고 만약 로그인상태라면 바로 dashboard창으로 이동하기
                        navigate("/login");
                    }}
                >
                    &nbsp;시작하기&nbsp;
                </Button>
            </Box>
        </div>
    );
}

function IntroPage() {
    return (
        <div>
            <HomeAppBar />
            <Intro />
        </div>
    );
}

export default IntroPage;
