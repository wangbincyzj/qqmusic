<template>
    <div class="hotList">
        <h3>热门歌单</h3>
        <div class="ulWrapper">
            <ul class="listView" v-if="listItems">
                <li v-for="item in listItems">
                    <HotSongListItem :itemInfo="item"/>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
    import {list_api} from "@/api/list";
    import HotSongListItem from "@/views/recommend/HotSongListItem";

    export default {
        name: "HotSongList",
        components: {HotSongListItem},
        data() {
            return {
                listItems: [
                    {dissname: "Api专用歌单", dissid:2790736553, imgurl:"http://y.gtimg.cn/mediastyle/y/img/cover_love_300.jpg"},
                    {dissname: "周杰伦专场", dissid:7143084629, imgurl:"http://y.gtimg.cn/music/photo_new/T002R300x300M000003RMaRI1iFoYd.jpg?n=1"},
                ]
            }
        },
        created() {
            this.init()
        },
        methods: {
            init() {
                list_api.getSongListHot(10000000, 1).then(ret => {
                    if (ret.code === 200) {
                        this.listItems.push(...ret.data.list)
                        console.log(this.listItems)
                    }
                })
            }
        }

    }
</script>

<style scoped lang="scss">
    @import "src/assets/css/mixin";

    div.hotList {
        padding-left: .15rem;

        h3 {
            font-size: var(--large);
            font-weight: 600;
            line-height: 2;
        }

        div.ulWrapper {
            height: 1.5rem;
            overflow-y: hidden;

            ul.listView {
                @include flex-x;
                overflow-x: auto;

                li {
                    flex-shrink: 0;
                    margin-right: .15rem;
                    width: 1.2rem;
                    height: 1.6rem;
                }
            }
        }
    }


</style>
