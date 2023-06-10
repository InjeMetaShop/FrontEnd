import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuBar from "../layout/MenuBar";
import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import UserProfile from "./sections/UserProfile";

const defaultTheme = createTheme();
const mdTheme = createTheme();

export default function ProfilePage() {
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
                                <Grid item xs={12}>
                                    <Paper
                                        sx={{
                                            p: 2,
                                            display: "flex",
                                            flexDirection: "column",
                                            height: 900,
                                        }}
                                    >
                                        <UserProfile />
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
