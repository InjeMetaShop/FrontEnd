import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

function UserProfile() {
    const [value, setValue] = React.useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <h1 style={{ textAlign: "left", paddingLeft: "1vmax" }}>
                내 콘텐츠
            </h1>

            <Box sx={{ width: "100%", typography: "body1" }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <TabList
                            onChange={handleChange}
                            aria-label="lab API tabs example"
                        >
                            <Tab label="내 아이템" value="1" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">상품 넣으면 될듯 여기에</TabPanel>
                </TabContext>
            </Box>
        </div>
    );
}

export default UserProfile;
