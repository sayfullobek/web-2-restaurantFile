import {BaseUrl} from "./BaseUrl";

export const Api = {
    login: '/auth/login',


    product: '/product',
    statistics: '/statistics',
    uploadPhoto: '/attachment/upload',
    downloadPhoto: BaseUrl + '/attachment/download?id='
}