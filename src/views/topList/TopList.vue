<template>
    <div class="topList clear" ref="test" @scroll="scroll($event)">
        <div class="back" :style="style">
            <span class="back" @click="$router.back()"><i class="iconfont icon-fanhui"/>返回</span>
            <div class="name" v-show="opacity>0.4">{{sectionInfo.name}}</div>
        </div>

        <div class="header clear">
            <img :src="sectionInfo.imgUrl" alt="">
        </div>
        <div class="list">
            <h3>排行榜 <span>共100首</span></h3>
            <ul>
                <li v-for="(item,index) in listInfo" @click="liClick(index)">
                    <div class="left">{{index+1}}</div>
                    <div class="right">
                        <p class="title nowrap">{{item.title}}</p>
                        <p class="singer">{{item.singer[0].name}}</p>
                    </div>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
    import {list_api} from "@/api/list";
    import {mapActions} from "vuex"
    export default {
        name: "TopList",
        data() {
            return {
                metaData: [
                    {
                        name: "热歌榜",
                        code: 26,
                        imgUrl: "https://y.gtimg.cn/music/photo_new/T003R300x300M000003z4qz24duh4e.jpg?max_age=2592000"
                    },
                    {
                        name: "新歌榜",
                        code: 27,
                        imgUrl: "https://y.gtimg.cn/music/photo_new/T003R300x300M000002izC1E4VpLbo.jpg?max_age=2592000"
                    },
                    {
                        name: "抖音排行榜",
                        code: 28,
                        imgUrl: "https://y.gtimg.cn/music/photo_new/T003R300x300M000004fXCmh15h479.jpg?max_age=2592000"
                    },
                    {
                        name: "流行指数榜",
                        code: 4,
                        imgUrl: "https://y.gtimg.cn/music/photo_new/T003R300x300M000001WGyFf3qsJL3.jpg?max_age=2592000"
                    },
                    {
                        name: "飙升榜",
                        code: 62,
                        imgUrl: "https://y.gtimg.cn/music/photo_new/T003R300x300M0000037anhP0bphTN.jpg?max_age=2592000"
                    },
                    {
                        name: "内地榜",
                        code: 5,
                        imgUrl: "https://y.gtimg.cn/music/photo_new/T003R300x300M0000018pUgB4DJqzQ.jpg?max_age=2592000"
                    },
                    {
                        name: "中国香港榜",
                        code: 59,
                        imgUrl: "https://y.gtimg.cn/music/photo_new/T003R300x300M000002tqq9N0y1qgW.jpg?max_age=2592000"
                    },
                    {
                        name: "中国台湾榜",
                        code: 61,
                        imgUrl: "https://y.gtimg.cn/music/photo_new/T003R300x300M000001Zxqtr25wvwU.jpg?max_age=2592000"
                    },],
                pic: null,
                listInfo: [],
                sectionInfo: null,
                opacity: 0
            }
        },
        computed: {
            style() {
                return {
                    background: `rgba(230,0,0,${this.opacity})`
                }
            }
        },
        created() {
            this.init()
        },
        mounted() {
        },
        methods: {
            init() {
                let listId = this.$route.params.id;
                let index = this.metaData.findIndex(item => item.code === parseInt(listId))
                this.sectionInfo = this.metaData[index];
                list_api.getTopList(listId, 0, 100).then(ret => {
                    this.listInfo = ret.data;
                });
            },
            scroll(e) {
                /*340*/
                this.opacity = e.target.scrollTop / 340 * 0.5;
            },
            liClick(index){
                let list = this.listInfo.map(item=>{
                    return {"name": item.name, "singer": item.singer[0].name, "id": item.mid}
                });
                this.startPlayingMusic({list, index})
            },
            ...mapActions({
                startPlayingMusic: "startPlayingMusic"
            })
        }
    }
</script>

<style scoped lang="scss">
    @import "src/assets/css/mixin";

    .topList {
        position: fixed;
        width: 102%;
        top: 0;
        bottom: 0;
        overflow-y: auto;

        .back {
            position: fixed;
            z-index: 100;
            color: #fff;
            left: 0;
            top: 0;
            height: .4rem;
            width: 100%;
            line-height: .4rem;
            padding-left: .1rem;

            span.back {
                i {
                    display: inline-block;
                    transform: scale(0.9);
                    position: relative;
                    top: 0.02rem;
                }

                font-size: var(--small-x);
            }

            div.name {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
            }
        }

        .header {
            background: #000;
            opacity: 0.5;

            img {
                width: 3rem;
                margin: .4rem auto;
            }

        }

        .list {
            h3 {
                font-size: var(--small-x);
                font-weight: 600;
                color: var(--text-info);
                padding: .05rem;
            }

            ul {
                padding: .1rem .2rem;

                li {
                    height: .5rem;
                    display: flex;
                    margin-bottom: .05rem;
                    border-bottom: 1px solid var(--border-color);

                    .left {
                        width: 8%;
                        color: var(--text-info);
                        line-height: .5rem;
                    }

                    .right {
                        color: var(--text-color);
                        display: flex;
                        flex-flow: column;
                        justify-content: space-evenly;
                        width: 80%;
                        line-height: .2rem;

                        .singer {
                            color: var(--text-info);
                        }
                    }
                }
            }
        }
    }
</style>
