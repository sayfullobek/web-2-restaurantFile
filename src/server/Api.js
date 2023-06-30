import {BaseUrl} from "./BaseUrl";

export const Api = {
    login: '/auth/login',
    district:'district',
    product: '/product',
    category:'/category',
    statistics: '/statistics',
    uploadPhoto: '/attachment/upload',
    downloadPhoto: BaseUrl + '/attachment/download?id='
}