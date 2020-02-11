/*歌手相关api*/
import {request} from "@/api/index";


/*歌手详情*/
let getArtistDetail = function (id) {
    return request.get("artist", {id})
};


/*歌手分类*/
let getArtistCate = function () {
    return request.get("artist/category")
};


/*歌手列表*/
let getArtistList = function (page=0, pageSize=30) {
    return request.get("https://v1.itooi.cn/tencent/artist/list",{
        sexId: -100,
        areaId: -100,
        genre: -100,
        index: -100,
        page, pageSize
    })
};

/*获取歌手音乐*/
let getArtistSong = function (id, page=0, pageSize=30) {
    return request.get("song/artist",{
        id, page, pageSize
    })
};


/*获取歌手专辑*/
let getArtistAlbum = function (id) {
    return request.get("album/artist",{id})
};



/*获取歌手MV*/
let getArtistMv = function (id) {
    return request.get("mv/artist", {id})
}

export const singer_api = {
    getArtistDetail, getArtistSong
}
