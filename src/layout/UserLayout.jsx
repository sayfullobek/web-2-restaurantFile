import {Footer} from "../component/Footer.jsx";
import {Outlet} from "react-router-dom";
export const UserLayout = () => {
    return (
        <div >
            <Outlet/>
            <Footer/>
        </div>
    )
}