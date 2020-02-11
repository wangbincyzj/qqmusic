/*MV相关的api*/
import {request} from "@/api/index";


/*获取MV详细信息*/
let getMvDetail = function (id) {
    return request.get("mv", {
        id
    })
};


/*获取MV播放地址*/
/* 视频大小类型：1080 720 480 240*/
let getMvUrl = function (id, quality=480) {
    return request.get("mvUrl",{
        id, quality
    })
};


/*MV歌单分类*/
let getMvCate = function () {
    return request.get("mv/category")
};


/*热门MV*/
let getMvHot = function () {
    return request.get("/mv/hot")
}


export const mv_api = {
    getMvDetail, getMvUrl, getMvCate, getMvHot
}
