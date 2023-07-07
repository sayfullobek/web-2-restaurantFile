import button from "bootstrap/js/src/button.js";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {GetProductList} from "../server/service/AppService.js";
import axios from "axios";

export const UNavbar = () => {
    const [search, setSearch] = useState('')
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const getAll = async () => {
        try {
            await GetProductList(setProducts)
            const res = await axios.get("http://localhost:8080/api/category")
            setCategories(res.data._embedded.list)
            await GetProductList(setProducts)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getAll()
    }, [])
    const filter = products.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    const filter1 = categories.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    const searchProduct = () => {
        return (
            <div>

            </div>
            // <div>
            //     {filter.length !== 0 ? (
            //         filter.map((item) => (
            //                 <h1>{item.name}</h1>
            //             ):(
            //             )
            //         )
            //     )}
            //     {/*{filter.length !== 0 ? (*/}
            //     {/*    filter1.length === 0 ? (*/}
            //     {/*        <h1>hech narsa topilmadi</h1>*/}
            //     {/*    ) : (*/}
            //     {/*        filter.map((item) => (*/}
            //     {/*                <h1>{item.name}</h1>*/}
            //     {/*            )*/}
            //     {/*        )*/}
            //     {/*    )) : (*/}
            //     {/*    filter.map((item) => (*/}
            //     {/*            <h1>{item.name}</h1>*/}
            //     {/*        )*/}
            //     {/*    ))}*/}
            // </div>
        )
    }
    return (
        <>
            <div className={"shadow mt-3 "} style={{height: "10vh"}}>
                <Link to={"/"} className={"text-black text-decoration-none "}>
                    <h3 style={{height: "1px", paddingTop: "2   0px", marginLeft: "100px"}}>Restaurant</h3>
                </Link>
                <input type="search" placeholder={"mahsulot qidirish..."} value={search}
                       onChange={e => setSearch(e.target.value)}
                       className={"form-control  bg-white"}
                       style={{width: "590px", marginLeft: "350px"}}
                />
                {localStorage.getItem("id") ? (
                    <Link to={"/my/profile"} role="button" className={"btn btn-warning"}
                          style={{marginLeft: "70%", marginTop: "-85px"}}> <i
                        className={"bi bi-person-circle"}>{"      " + localStorage.getItem("firstName") + "  " + localStorage.getItem("lastName")}</i>
                    </Link>
                ) : (
                    <button data-bs-toggle="modal" href="#loginUser"
                            type={"button"} role="button" className={"btn btn-warning"}
                            style={{marginLeft: "85%", marginTop: "-85px"}}>Kirish
                    </button>
                )}
                <Link to={"/basket"}
                    role="button" className={"btn btn-warning "}
                    style={{marginLeft: "30px", marginTop: "-85px"}}>
                    <i className="bi bi-cart3 " style={{fontSize: "20px"}}></i>
                </Link>
            </div>
        </>
    )
}