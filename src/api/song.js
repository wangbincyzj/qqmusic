/*歌曲相关api*/
import {request} from "@/api/index";


/*获取音乐详情*/
let getSongDetail = function (id) {
    return request.get("song", {id})
};


/*获取音乐播放地址*/
/*码率类型：48 96 128 192 320 ape flac*/

let getSongAddr = function (id, quality = 192) {
    return request.get("url", {id, quality})
};


/*获取音乐图片*/
let getSongPic = function (id) {
    return request.get("pic", {id})
};


/*获取专辑详情*/
let getAlbumDetail = function (id) {
    return request.get("album", {id})
};










export const song_api = {
    getSongDetail, getSongPic, getAlbumDetail
}
