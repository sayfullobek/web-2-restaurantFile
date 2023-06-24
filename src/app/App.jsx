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

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Menu/>}/>
                    <Route path={"/auth/login"} element={<Login/>}/>
                    <Route path={"/auth/admin"} element={<AdminLayout/>}>
                        <Route index element={<Dashboard/>}/>
                        <Route path={"/auth/admin/category"} element={<Category/>}/>
                        <Route path={"/auth/admin/product"} element={<Product/>}/>
                        <Route path={"/auth/admin/product/:id"} element={<ProductItem/>}/>
                        <Route path={"/auth/admin/region"} element={<Region/>}/>
                    </Route>
                    <Route path={"/user"} element={<UserLayout/>}/>
                    <Route path={"*"} element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
