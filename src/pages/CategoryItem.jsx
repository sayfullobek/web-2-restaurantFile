import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {BaseConfig} from "../server/BaseConfig.js";
import {BaseUrl} from "../server/BaseUrl.js";
import {Api} from "../server/Api.js";
import {Loading} from "../component/Loading.jsx";

export const CategoryItem = () => {
    const id = useParams().id
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const
        getProduct = async () => {
            try {
                const res = await BaseConfig.doGetByCategoryId(id)
                setLoading(true)
                setProduct(res.data)
            } catch (err) {
                console.log(err)
            }
        }
    console.log(product)
    useEffect(() => {
        getProduct()
    }, [])
    // const filter = product.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <div>
            {loading ? (
                <div className={"container mt-5"}>
                    <input type="search" placeholder={"mahsulot qidirish..."} value={search}
                           onChange={e => setSearch(e.target.value)}
                           className={"form-control m-3 mt-0 mb-0 bg-danger"}/>

                    {product.map((item) => (
                        <>
                            <div data-bs-toggle="modal" href="#exampleModalToggle" role="button"
                                 className="card d-inline-block mb-3"
                                 style={{width: "600px", borderColor: 'seagreen', boxShadow: "2px 0,3px"}}>
                                <div className="row g-0" style={{boxShadow: "1px 0,9"}}>
                                    <div className="col-md-4">
                                        <img src={BaseUrl + Api.downloadPhoto + item.img}
                                             className="img-fluid rounded-start " style={{width: "100%"}}
                                             alt={item.name}/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <p className="card-text">{item.description}</p>
                                            <p className="card-text"><small
                                                className="text-muted">{item.price} so'm</small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="exampleModalToggle" aria-hidden="true"
                                 aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">

                                            <img src={BaseUrl + Api.download + item.img}
                                                 className="img-fluid rounded-start " style={{width: "800px"}}
                                                 alt={item.name}></img>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="col-md-4">
                                                <h5 className="card-title">{item.name}</h5>
                                            </div>
                                            <div className={"modal-body"}>
                                                <p className="card-text">{item.description}</p>
                                            </div>
                                            <div className={"modal-body"}>
                                                <p className="card-text"><small
                                                    className="text-muted">{item.price} so'm</small>
                                                </p>
                                            </div>
                                        </div>
                                        <button className={"btn btn-warning mb-2"}
                                                data-bs-toggle="modal" href="#examplePriceModalToggle" role="button"
                                                style={{width: "470px", marginLeft: "15px"}}> Savatga qo'shish
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                    <div className="modal fade" id="examplePriceModalToggle" aria-hidden="true"
                         aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalToggleLabel">Kirish</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <input value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}
                                           type="number"
                                           className={"form-control"} placeholder={"+998 (__)___-__-__"}/>
                                </div>
                                <div className="modal-footer">
                                </div>
                                <button className="btn btn-warning mb-3" data-bs-target="#exampleModalToggle2"
                                        data-bs-toggle="modal" data-bs-dismiss="modal"
                                        style={{width: "95%", marginLeft: "14px"}}>Tasdiqlash
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            ) : (
                <Loading/>
            )}
        </div>

    )
}