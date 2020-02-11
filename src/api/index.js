import axios from "axios"

const SERVER = "https://v1.itooi.cn/tencent/";
axios.interceptors.response.use(val=>val.data)

let get = function (url, params) {
    return axios.get(SERVER+url, {
        params
    })
};






export const request = {
    get
};
