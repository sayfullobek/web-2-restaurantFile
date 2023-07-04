import {BaseUrl} from "./BaseUrl";

export const Api = {
    register: "/auth/register",
    findUser: "/auth/findUser",
    login: '/auth/login',
    district: '/district',
    product: '/product',
    category: '/category',
    statistics: '/statistics',
    basket: '/basket?id=',
    uploadPhoto: '/attachment/upload',
    downloadPhoto: BaseUrl + '/attachment/download?id='
}