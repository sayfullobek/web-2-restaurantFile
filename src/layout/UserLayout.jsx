import {Footer} from "../component/Footer.jsx";
import {Outlet} from "react-router-dom";
export const UserLayout = () => {
    return (
        <div className={"container"}>
            <Outlet/>
            <Footer/>
        </div>
    )
}