import {request} from "@/api/index";



let getBanner = function () {
    return request.get("/banner")
};


export const banner_api = {
    getBanner
}
