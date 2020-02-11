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
                listItems: []
            }
        },
        created() {
            this.init()
        },
        methods: {
            init() {
                list_api.getSongListHot(10000000, 1).then(ret => {
                    if (ret.code === 200) {
                        this.listItems = ret.data.list;
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
