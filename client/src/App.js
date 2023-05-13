import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./component/home/HomePage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
            </Routes>
        </div>
    );
}

export default App;
