import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Menu} from "../pages/Menu";
import {Category} from "../pages/Category";
import {Product} from "../pages/Product";
import {ProductItem} from "../pages/ProductItem";
import {Region} from "../pages/Region";
import {Login} from "../pages/auth/Login";
import {Dashboard} from "../pages/admin/Dashboard";
import {AdminLayout} from "../layout/AdminLayout";
import {NotFound} from "../component/NotFound";
import {UserLayout} from "../layout/UserLayout";
import {District} from "../pages/District.jsx";
import {CategoryItem} from "../pages/CategoryItem.jsx";
import "../assets/scss/style.scss";
import "../assets/css/style.css";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<UserLayout/>}>
                        <Route index element={<Menu/>}/>
                        <Route path={"category/:id"} element={<CategoryItem/>}/>
                    </Route>
                    <Route path={"/auth/login"} element={<Login/>}/>
                    <Route path={"/auth/admin"} element={<AdminLayout/>}>
                        <Route index element={<Dashboard/>}/>
                        <Route path={"/auth/admin/category"} element={<Category/>}/>
                        <Route path={"/auth/admin/product"} element={<Product/>}/>
                        <Route path={"/auth/admin/product/:id"} element={<ProductItem/>}/>
                        <Route path={"/auth/admin/region"} element={<Region/>}/>
                        <Route path={"/auth/admin/district"} element={<District/>}/>
                    </Route>
                    <Route path={"*"} element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
