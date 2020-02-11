<template>
    <div id="search">
        <div class="searchBar">
            <i class="iconfont icon-fanhui" @click="$router.back()" />
            <input autofocus  type="text" placeholder="搜索歌曲, 歌手" v-model="keyword" @keydown.enter="search">
            <span @click="search">搜索</span>
        </div>
        <div class="list">
            <div class="singer" v-if="singerInfoDetail">
                <div class="name"><span>歌手:</span>{{singer.name}}</div>
                <div class="info" >
                    <span>专辑:{{singerInfoDetail.total_album}}</span>
                    <span>粉丝:{{singerInfoDetail.singer_info.fans}}</span>
                    <span>点播数:{{singerInfoDetail.extras[0].listen_count}}</span>
                </div>
            </div>
            <ul class="songList" v-if="listInfo">
                <li v-for="(item,index) in listInfo" @click="liClick(index)">
                    <div class="name_li">{{item.name}}</div>
                    <div class="singer_li">{{item.singer}}</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {search_api} from "@/api/search"; // song singer
    import {singer_api} from "@/api/artist";
    import {mapActions} from "vuex";

    export default {
        name: "Search",
        data() {
            return{
                keyword:"",
                error: false,
                singer:null,
                singerInfo: null,
                singerInfoDetail: null,
                listInfo: null
            }
        },
        methods:{
            search() {
                this.singerInfoDetail = null;
                this.singerInfo = null;
                if(!this.keyword) return;
                search_api.search("song", this.keyword).then(ret=>{
                    if(ret.data.list.length === 0){
                        this.error = true; return;
                    }
                    console.log(ret)
                    // 歌手信息注入
                    if(ret.data.list.length>0 && ret.data.list[0].singer[0].name===this.keyword){
                        this.singer = {};
                        this.singer.name = ret.data.list[0].singer[0].name;
                        this.singer.id = ret.data.list[0].singer[0].mid;
                        singer_api.getArtistDetail(this.singer.id).then(ret=>{
                            this.singerInfoDetail = ret.data;
                        })
                    }
                    // 歌曲列表注入
                    this.listInfo = ret.data.list.map(item=>{
                        return {name: item.songname, singer: item.singer[0].name, id:item.songmid}
                    })
                })
            },
            liClick(index){
                this.startPlayingMusic({index, list: this.listInfo})
            },
            ...mapActions({
                startPlayingMusic: "startPlayingMusic"
            })
        }
    }
</script>

<style scoped lang="scss">
    .searchBar{
        color: white;
        line-height: .54rem;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        background: var(--red);
        display: flex;
        i{
            font-size: var(--large);
            width: 10%;
            text-align: center;

        }
        input{
            width: 70%;
            &::placeholder{
                color: var(--text-info);
            }
            color: white;
            border: none;
            outline: none;
            background: var(--red);
        }
        span{
            width: 20%;
            text-align: center;
        }
    }
    .list{
        margin-top: .54rem;
        background: var(--background-color);
        .singer{
            display: flex;
            flex-flow: column;
            padding: 0 .1rem;
            background: rgba(65, 90, 236, 0.06);
            .name{
                line-height: .3rem;
                font-weight: 600;
                span{
                    color: var(--text-info);
                    font-size: var(--normal);
                }
            }
            .info{
                display: flex;
                line-height: .2rem;
                font-size: var(--normal);
                color: #415aec;
                span{
                    margin-right: .05rem;
                }
            }
        }
        .songList{
            padding: 0 .1rem;
            color: var(--text-color);
            li{
                border-bottom: 1px solid var(--border-color);
                height: .5rem;
                line-height: .25rem;
                .name_li{

                }
                .singer_li{
                    font-size: var(--normal);
                    color: var(--text-info);
                }
            }
        }
    }
</style>
