import {NotFound} from "../component/NotFound.jsx";
import {useNavigate} from "react-router-dom";

export const My = () => {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.clear()
        navigate("/")
    }

    return (
        localStorage.getItem("id") ? (
            <div>
                <h1 className={"text-center"}>{localStorage.getItem("firstName") +" "+" "+ localStorage.getItem("lastName")}</h1><br/>
                <form className={"d-flex "} style={{marginLeft: "40%"}}>
                    <button className={"btn btn-warning m-2"}>Ma'lumot
                    </button>
                    <button className={"btn btn-warning m-2"}>Ma'lumot
                    </button>
                    <button onClick={() => logout()} className={"btn btn-danger m-2"}>Chiqish
                    </button>
                </form>
            </div>
        ) : (
            <NotFound/>
        )
    )
}