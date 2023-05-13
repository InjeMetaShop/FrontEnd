import React, { useEffect } from "react";
import axios from "axios";
function HomePage() {
    useEffect(() => {
        // axios.get("/api/ping").then((response) => {
        //     console.log(response.data);
        // });
    }, []);

    return <div>HomePage</div>;
}

export default HomePage;
