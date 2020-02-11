<template>
    <div class="topList clear" ref="test" @scroll="scroll($event)">
        <div class="back" :style="style">
            <span class="back" @click="$router.back()"><i class="iconfont icon-fanhui"/>返回</span>
            <div class="name nowrap" v-if="sectionInfo">{{sectionInfo.dissname}}</div>
        </div>

        <div class="header clear" v-if="sectionInfo">
            <img :src="sectionInfo.logo" alt="">
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
        name: "SongList",
        data() {
            return {
                pic: null,
                listInfo: [],
                opacity: 0,
                sectionInfo: null
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
                list_api.getSongList(listId).then(ret => {
                    console.log(ret);
                    this.sectionInfo = ret.data[0]
                    this.listInfo = ret.data[0].songlist;
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
