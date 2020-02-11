/*list.js集合了一些列表,电台类api*/
import {request} from "@/api/index";

/*音乐歌单*/
let getSongList = function (id) {
    return request.get("songList", {
        id
    })
};

/*排行榜*/
let getTopList = function (id, page=0, pageSize=30) {
    return request.get("topList", {
        id, page, pageSize
    })
};


/*歌单分类*/
let getSongListCate = function () {
    return request.get("songList/category")
};


/*热门歌单*/
/*categoryId	×	分类 ID	ID 见歌单分类接口返回数据*/
/*sortId	×	排序 ID	ID 见歌单分类接口返回数据*/
let getSongListHot = function (categoryId,sortId, page=1, pageSize=30) {
    return request.get("songList/hot",{
        categoryId,sortId,page,pageSize
    })
};


/*用户歌单信息*/
let getUserList = function (uid) {
    return request.get("songList/user",{
        uid
    })
};


export const list_api = {
    getSongList, getTopList, getSongListCate, getSongListHot, getUserList
}















