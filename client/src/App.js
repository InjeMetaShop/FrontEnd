import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomeAppBar from "./component/view/layout/HomeAppBar";
import HomePage from "./component/view/home/HomePage";
import LoginPage from "./component/view/auth/LoginPage";
import SignUpPage from "./component/view/auth/SignUpPage";
import ProductDetailPage from "./component/view/product/ProductDetail";
import IntroPage from "./component/view/intro/IntroPage";
import ItemPage from "./component/view/item/ItemPage";
import Footer from "./component/view/layout/Footer";

import ExPage from "./component/view/item/ExPage";
import ProductDetail from "./component/view/product/ProductDetail";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<IntroPage />}></Route>
                <Route path="/dashboard" element={<HomePage />}></Route>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path="/register" element={<SignUpPage />}></Route>
                <Route path="/item" element={<ExPage />}></Route>
                <Route
                    path="/product_detail"
                    element={<ProductDetail />}
                ></Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
