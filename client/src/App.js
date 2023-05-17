import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./component/home/HomePage";
import LoginPage from "./component/auth/LoginPage";
import SignUpPage from "./component/auth/SignUpPage";
import ProductDetailPage from "./component/product/ProductDetail";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path="/register" element={<SignUpPage />}></Route>
                <Route
                    path="/product/:productId"
                    element={<ProductDetailPage />}
                ></Route>
            </Routes>
        </div>
    );
}

export default App;
