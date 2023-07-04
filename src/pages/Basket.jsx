import {useEffect, useState} from "react";
// import {getBasketProduct} from "../server/service/AppService.js";

export const Basket=()=>{

    const [product,setProduct]=useState([])
    const id=localStorage.getItem("id")
    console.log(product)
    console.log(id)
    const getAll= async ()=>{
        // await getBasketProduct(id,setProduct)
    }
    useEffect(()=>{
        getAll()
    },[])
    return(
        <div>
saksk
        </div>
    )
}