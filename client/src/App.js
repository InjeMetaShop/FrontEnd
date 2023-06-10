import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./component/view/home/HomePage";
import LoginPage from "./component/view/auth/LoginPage";
import SignUpPage from "./component/view/auth/SignUpPage";
import IntroPage from "./component/view/intro/IntroPage";
import Footer from "./component/view/layout/Footer";
import ProductPage from "./component/view/product/ProductPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<IntroPage />}></Route>
                <Route path="/dashboard" element={<HomePage />}></Route>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path="/register" element={<SignUpPage />}></Route>
                <Route path="/product/:productId" element={<ProductPage />} />
            </Routes>
        </div>
    );
}

export default App;
