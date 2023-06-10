import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
function Copyright() {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{ backgroundColor: "transparent" }}
        >
            {"Copyright © "}
            Meta-Shop&nbsp;
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

function Footer() {
    return (
        <Box component="footer">
            <Container maxWidth="lg">
                <Copyright />
            </Container>
        </Box>
    );
}

export default Footer;
