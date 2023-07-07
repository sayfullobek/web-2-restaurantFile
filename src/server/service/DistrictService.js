import {BaseConfig} from "../BaseConfig";
import {Api} from "../Api";
import {toast} from "react-toastify";


export const EditDistrict = async (data, id) => {
    const check = {
        name: data.name.trim().length === 0,
        regId: data.regId === '0',
    }
    if (check.name) {
        return toast.warning("mahsulot nomi bo'lishi shart")
    }
    if (check.regId) {
        return toast.warning("region tanlash shart")
    }
    try {
        await BaseConfig.doPut(Api.district, id, data)
        toast.success("Taxrirlandi")
    } catch (err) {
        toast.error("xatolik")
    }
}

export const DeleteDistrict = async (id) => {
    try {
        await BaseConfig.doDelete(Api.district, id)
        toast.success("Mahsulot o'chirildi")
    } catch (err) {
        toast.error("xatolik")
    }
}

export const GetDistrictList = async (setProducts) => {
    try {
        const res = await BaseConfig.doGet(Api.district)
        setProducts(res.data)
    } catch (err) {
        console.log(err)
    }
}

export const SaveDidtrict = async (data) => {
    const check = {
        name: data.name.trim().length === 0,
        regId: data.regId === '0',
    }
    if (check.name) {
        return toast.warning("mahsulot nomi bo'lishi shart")
    }
    if (check.regId) {
        return toast.warning("mahsulot bo'limini tanlash shart")
    }
    try {
        await BaseConfig.doPost(Api.district, data)
        toast.success("saqlandi")
    } catch (err) {
        console.log(err)
        toast.error("xatolik")
    }
}