import {toast} from "react-toastify";
import {BaseConfig} from "../BaseConfig";
import {Api} from "../Api";
import {ifStatus} from "../../utils/Utils";
import {useNavigate} from "react-router-dom";
import {Menu} from "../../pages/Menu.jsx";

export const LoginHandler = async (data) => {
    if (data.phoneNumber.trim().length === 0) {
        return toast.error("tel raqam kiritish shart")
    }
    if (data.password.trim().length === 0) {
        return toast.error("parolda xatolik")
    }
    try {
        const res = await BaseConfig.doPost(Api.login, data)
        if (ifStatus(res.status)) {
            localStorage.setItem("id", res.data.user.id)
            localStorage.setItem("firstName", res.data.user.firstName)
            localStorage.setItem("lastName", res.data.user.lastName)
            localStorage.setItem("phoneNumber", res.data.user.phoneNumber)
            localStorage.setItem("role", res.data.user.roles[0].roleName)
            localStorage.setItem("token", res.data.resToken.body)
            localStorage.setItem("tokenType", res.data.resToken.tokenType)
            toast.success("kuting...")
            setTimeout(() => {
                window.location.reload()
            }, 2000)
        }
    } catch (err) {
        console.log(err)
        toast.error("xatolik")
    }
}
export const Register = async (dto) => {
    if (dto.phoneNumber.trim().length !== 9) {
        return toast.warn("tel raqamni tog'ri kiriting")
    }
    if (dto.name.trim().length === 0) {
        return toast.warn("ismingizni kiriting")
    }
    if (dto.surName.trim().length === 0) {
        return toast.warn("familyangizni kirting")
    }
    try {
        const res = BaseConfig.doPost(Api.register, dto)
        console.log(res)
        // if (ifStatus(res.status)) {
        //     localStorage.setItem("id", res.data.user.id)
        //     localStorage.setItem("firstName", res.data.user.firstName)
        //     localStorage.setItem("lastName", res.data.user.lastName)
        //     localStorage.setItem('phoneNumber', res.data.user.phoneNumber)
        //     localStorage.setItem("role", res.data.user.roles[0].roleName)
        //     toast.success("kuting...")
        //     console.log(res.status.data.length)
        //     setTimeout(() => {
        //         window.location.reload()
        //     })
        // }
    } catch (err) {
        console.log(err)
    }
}