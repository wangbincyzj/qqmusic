<template>
    <div id="rank">
        <Header :nav-info="navInfo" class="fixed"/>

        <div class="rankItem">
            <RankListItem
                    class="listItem"
                    v-for="item in listInfo"
                    :itemInfo="item"
                    @click.native="$router.push(`/topList/${item.code}`)"
            />
        </div>
    </div>
</template>

<script>
    import Header from "@/components/project/Header";
    import RankListItem from "@/components/project/RankListItem";
    import {list_api} from "@/api/list";

    export default {
        name: "Rank",
        components: {RankListItem, Header},
        data() {
            return{
                navInfo:{
                    activeIndex: 1,
                    nav:[
                        {name:"推荐", path:"/recommend"},
                        {name:"排行", path: "/rank"},
                        {name:"我喜欢", path: "/fav"},
                    ]
                },
                listInfo : [
                    {name:"热歌榜", code: 26, imgUrl: "https://y.gtimg.cn/music/photo_new/T003R300x300M000003z4qz24duh4e.jpg?max_age=2592000"},
                    {name:"新歌榜", code: 27, imgUrl:"https://y.gtimg.cn/music/photo_new/T003R300x300M000002izC1E4VpLbo.jpg?max_age=2592000"},
                    {name:"抖音排行榜", code: 28, imgUrl: "https://y.gtimg.cn/music/photo_new/T003R300x300M000004fXCmh15h479.jpg?max_age=2592000"},
                    {name:"流行指数榜", code: 4, imgUrl:"https://y.gtimg.cn/music/photo_new/T003R300x300M000001WGyFf3qsJL3.jpg?max_age=2592000"},
                    {name:"飙升榜", code: 62, imgUrl: "https://y.gtimg.cn/music/photo_new/T003R300x300M0000037anhP0bphTN.jpg?max_age=2592000"},
                    {name:"内地榜", code: 5, imgUrl: "https://y.gtimg.cn/music/photo_new/T003R300x300M0000018pUgB4DJqzQ.jpg?max_age=2592000"},
                    {name:"中国香港榜", code: 59, imgUrl:"https://y.gtimg.cn/music/photo_new/T003R300x300M000002tqq9N0y1qgW.jpg?max_age=2592000"},
                    {name:"中国台湾榜", code: 61, imgUrl:"https://y.gtimg.cn/music/photo_new/T003R300x300M000001Zxqtr25wvwU.jpg?max_age=2592000"},
                ],
            }
        },
        created() {
            this.init()
        },
        methods:{
            init() {
                this.listInfo.forEach(item=>{
                    this.dataInject(item)
                })
            },
            dataInject(obj){
                list_api.getTopList(obj.code).then(ret=>{
                    this.$set(obj,"data",ret.data.splice(0, 3));
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    #rank{
        background: var(--background-color-light);
        min-height: 100vh;
        padding: 0 .1rem;
        .fixed{
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
        }
        .rankItem{
            margin-top: .48rem;
        }
        .listItem{
            margin-top: .1rem;
        }
    }

</style>
