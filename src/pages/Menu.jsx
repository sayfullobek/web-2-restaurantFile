import rasm from "../images/bg_1.jpg"
import rasm2 from "../images/bg_2.jpg"
import rasm3 from "../images/bg_3.jpg"
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {
    GetCategoryList,
    GetProductList,
    GetUser,
    SaveBasketProducts,
} from "../server/service/AppService.js";
import {Api} from "../server/Api.js";
import button from "bootstrap/js/src/button.js";

export const Menu = () => {
    const [category, setCategory] = useState([]);
    const [product, setProduct] = useState([]);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [users, setUser] = useState([])
    const [one, setOne] = useState({})
    const getAll = async () => {
        try {
            await GetProductList(setProduct)
            await GetUser(setUser)
            await GetCategoryList(setCategory)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getAll()
    }, [])
    const navigate = useNavigate()
    const oneProduct = (onejon) => {
        setOne(onejon)
    }

    return (
        <div>
            <section className="hero-wrap">
                    <div className="home-slider owl-carousel js-fullheight">
                    <div className="slider-item js-fullheight " style={{backgroundImage: `url(${rasm})`}}>
                        <div className=" "
                             style={{width: "80%", marginLeft: "150px", height: "70%", marginTop: "20px"}}>

                        </div>
                            <section className="shadow" style={{marginLeft: "200px"}}>
                                {category.map((item, i) => (
                                    <Link to={`/category/${item.id}`}>
                                        <div className={"d-inline-block"}
                                             style={{marginLeft: "40px", boxShadow: "2px 0,2px white"}}>
                                            <div className="card text-white bg-dark  mb-3"
                                                 style={{maxWidth: " 18rem", marginLeft: "20px"}}>
                                                <div className="card-header">{i + 1}- bo'lim</div>
                                                <div className="card-body">
                                                    <h5 className="card-title"><i className="fas fa-burger"
                                                                                  style={{fontSize: "40px"}}></i>{item.name}
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </section>

                    </div>
                    <div className="slider-item js-fullheight" style={{backgroundImage: `url(${rasm2}`}}>
                        <div className="overlay"></div>
                    </div>
                </div>
            </section>
            <section className="ftco-section ftco-intro" style={{backgroundImage: `url(${rasm3}`}}>
                < div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <span>Hush kelibsiz</span>
                            <h2>Maroqli Hordiq va Yoqimli Ishtaha</h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-2">
                        <div className="col-md-7 text-center heading-section ftco-animate fadeInUp ftco-animated">
                            <span className="subheading">Blog</span>
                            <h2 className="mb-4">Recent Blog</h2>
                        </div>
                    </div>
                    {product.map((item) => (
                        <>
                            <div data-bs-toggle="modal" onClick={() => oneProduct(item)} href="#exampleModalToggle"
                                 role="button"
                                 id={"productCard"}
                                 className="card shadow  d-inline-block mb-5"
                                 style={{marginLeft: "40px", width: "20rem"}}>
                                <img src={Api.downloadPhoto + item.img} style={{width: "100%", height: "29vh"}}
                                     className="card-img-top" alt={item.name}/>
                                <div className="card-body">
                                    <h3 className={"text-center"}>{item.name}</h3>
                                    <h5 className="card-text">narxi - {item.price}</h5>
                                    <h5 className="card-text">bolimi - {item.category.name}</h5>
                                    <p className="card-text">{item.description}  </p>

                                    <div id={"saveIcon"} style={{
                                        marginLeft: "245px",
                                        width: "50px",
                                        borderRadius: "50%",
                                        borderBlockColor: "#494f54"
                                    }}>
                                        <i className="bi bi-cart3 " style={{fontSize: "30px", marginLeft: "10px"}}></i>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </section>
            <div className="modal fade" id="exampleModalToggle" aria-hidden="true"
                 aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">

                            <img src={Api.downloadPhoto + one.img}
                                 className="img-fluid rounded-start " style={{width: "800px"}}
                                 alt={one.name}></img>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="col-md-4">
                                <h5 className="card-title">{one.name}</h5>
                            </div>
                            <div className={"modal-body"}>
                                <p className="card-text">{one.description}</p>
                            </div>
                            <div className={"modal-body"}>
                                <p className="card-text"><small
                                    className="text-muted">{one.price} so'm</small>
                                </p>
                            </div>
                        </div>
                        {localStorage.getItem("id") ? (
                            <button className={"btn btn-warning mb-2"}
                                    onClick={() => saveProduct(one.id)} role="button"
                                    style={{width: "470px", marginLeft: "15px"}}> Savatga qo'shish
                            </button>
                        ) : (<button role="button" data-bs-toggle="modal" href="#loginUser"
                                     className={"btn btn-warning mb-2"}
                                     style={{width: "470px", marginLeft: "15px"}}> Savatga qo'shish
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <div className="modal fade" id="loginUser" aria-hidden="true"
                 aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalToggleLabel">Kirish</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} type="number"
                                   className={"form-control"} placeholder={"+998 (__)___-__-__"}/>
                        </div>
                        <button onClick={() => checkUser({users, phoneNumber, navigate})}
                                className="btn btn-warning mb-3"
                                style={{width: "95%", marginLeft: "14px"}}>Tasdiqlash
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export const checkUser = ({users, phoneNumber, navigate}) => {
    const register = () => {
        navigate("/auth/register")
        window.location.reload()
    }
    return (
        <>
            <div>
                {users.map((item) => (
                    item.phoneNumber === phoneNumber ? (
                        localStorage.setItem("id", item.id),
                            localStorage.setItem("firstName", item.firstName),
                            localStorage.setItem("lastName", item.lastName),
                            localStorage.setItem('phoneNumber', item.phoneNumber),
                            localStorage.setItem("role", item.getRole[0].roleName),
                            window.location.reload()
                    ) : (
                        register()
                    )))}
                <div>
                </div>
            </div>
        </>
    )
}
export const saveProduct = (id) => {
    const getAll = async () => {
        try {
            await SaveBasketProducts(id);
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div>{
            getAll()
        }
        </div>
    )
}