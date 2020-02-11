/*重置html fontsize*/

let resetHtml = function () {
    let ratio = window.outerWidth / 414;
    document.documentElement.style.fontSize = ratio * 100 + "px";
    document.body.style.fontSize = ".16rem";
};



export default {
    resetHtml
}
