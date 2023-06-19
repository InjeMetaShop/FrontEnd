import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import UserCart from "./UserCart";

function UserProfile() {
    const [value, setValue] = useState("1");
    const [myCart, setMyCart] = useState([]);
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
                    <TabPanel value="1">
                        <UserCart />
                    </TabPanel>
                </TabContext>
            </Box>
        </div>
    );
}

export default UserProfile;
