import button from "bootstrap/js/src/button.js";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {GetProductList} from "../server/service/AppService.js";
import axios from "axios";

export const UNavbar = () => {
    const [search, setSearch] = useState('')
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [user, setUser] = useState([])
    const getAll = async () => {
        try {
            await GetProductList(setProducts)
            const res = await axios.get("http://localhost:8080/api/category")
            setCategories(res.data._embedded.list)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getAll()
    }, [])

    // const filter = products.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    // const filter1 = categories.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <>
            <div className={"container mt-3 mb-4"}>
                <input type="search" placeholder={"mahsulot qidirish..."} value={search}
                       onChange={e => setSearch(e.target.value)}
                       className={"form-control  bg-white"}
                       style={{width: "590px", marginLeft: "300px"}}
                />
                <Link to={"/"} className={"text-black bg-secondary text-decoration-none "}>
                    <h3 style={{width: "1px", height: "1px", marginTop: "-50px"}}>Restaurant</h3>
                </Link>
                {localStorage.getItem("id") ? (
                    <Link to={"/my/" + localStorage.getItem("id")} role="button" className={"btn btn-warning"}
                          style={{marginLeft: "85%", marginTop: "3px"}}> <i className={"bi bi-person-circle"}>{"      "+localStorage.getItem("firstName")+"  "+localStorage.getItem("lastName")}</i>
                    </Link>
                ) : (
                    <button data-bs-toggle="modal" href="#loginUser"
                            type={"button"} role="button" className={"btn btn-warning"}
                            style={{marginLeft: "85%", marginTop: "3px"}}>Kirish
                    </button>
                )}
                <button data-bs-toggle="modal"
                        role="button" className={"btn btn-warning "}
                        style={{marginLeft: "30px", marginTop: "3px"}}><i className="bi bi-geo-alt-fill"></i>
                </button>
            </div>
        </>
    )
}
// const GetProduct = ({products, categories}) => {
//
//     return (
//         <>
//             <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop"
//                     aria-controls="offcanvasTop">Toggle top offcanvas
//             </button>
//             <div className="offcanvas offcanvas-top" tabIndex="-1" id="offcanvasTop"
//                  aria-labelledby="offcanvasTopLabel">
//                 <div className="offcanvas-header">
//                     <h5 id="offcanvasTopLabel">{products.name + categories.name}</h5>
//                     <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
//                             aria-label="Close"></button>
//                 </div>
//                 <div className="offcanvas-body">
//                     ...
//                 </div>
//             </div>
//         </>
//     )
// }