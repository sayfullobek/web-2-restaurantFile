import {Footer} from "../component/Footer.jsx";
import {Outlet} from "react-router-dom";
import {UNavbar} from "../component/UNavbar.jsx";
import React from "react";

export const UserLayout = () => {
    return (
        <div>
            <UNavbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}