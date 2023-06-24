import {Navbar} from "../component/Navbar";
import {Menu} from "../pages/Menu";
import {Outlet} from "react-router-dom";

export const UserLayout = () => {
    return (
        <div className={"container"}>
            <Navbar/>
            <Outlet/>
            <Menu/>
        </div>
    )
}