import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Menu} from "../pages/Menu";
import {Category} from "../pages/admin/Category.jsx";
import {Product} from "../pages/admin/Product.jsx";
import {ProductItem} from "../pages/admin/ProductItem.jsx";
import {Region} from "../pages/admin/Region.jsx";
import {Login} from "../pages/auth/Login";
import {Dashboard} from "../pages/admin/Dashboard";
import {AdminLayout} from "../layout/AdminLayout";
import {NotFound} from "../component/NotFound";
import {UserLayout} from "../layout/UserLayout";
import {District} from "../pages/admin/District.jsx";
import {CategoryItem} from "../pages/CategoryItem.jsx";
import "../assets/scss/style.scss";
import "../assets/css/style.css";
import {My} from "../pages/My.jsx";
import {Basket} from "../pages/Basket.jsx";
import {Registers} from "../pages/auth/Register.jsx";
import {Profile} from "../pages/profil.jsx";
import {Cards} from "../pages/Cards.jsx";
import {Order} from "../pages/Order.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<UserLayout/>}>
                        <Route index element={<Menu/>}/>
                        <Route path={"category/:id"} element={<CategoryItem/>}/>
                        <Route path={"my/:id"} element={<My/>}/>
                        <Route path={"/basket"} element={<Basket/>}/>
                        <Route path={"/auth/register"} element={<Registers/>}/>
                        <Route path={"/my/profile"} element={<Profile/>}/>
                        <Route path={"/my/cards"} element={<Cards/>}/>
                        <Route path={"/my/order"} element={<Order/>}/>
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
