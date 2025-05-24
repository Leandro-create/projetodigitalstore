import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "../../page/HomePage";
import ProductListingPage from "../../page/ProductListingPage";
import ProductViewPage from "../../page/ProductViewPage";
import Category from "../../page/Category";
import Layout from "../../page/Layout";


const Paths = () => {
    return (
        <>
        <HashRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/produtos" element={<ProductListingPage/>}/>
            <Route path="/categorias" element={<Category/>}/>
            <Route path="/meuspedidos" element={<Layout/>}/>
            <Route path="/produtos/:id" element={<ProductViewPage/>}/>
        </Routes>
        </HashRouter>
        </>
    );
}
 
export default Paths;