<template>
    <div>

        <div class="fixed">

            <Header :nav-info="navInfo"/>

            <div class="searchBar" @click="$router.push('/search')">
                <div class="content">
                    <i class="iconfont icon-icon-test"/>搜索
                </div>
            </div>
        </div>





        <section class="main">

            <HotSongList/>

            <HotMvList/>
        </section>
    </div>
</template>

<script>
    import Header from "@/components/project/Header";
    import HotSongList from "@/views/recommend/HotSongList";
    import HotMvList from "@/views/recommend/HotMvList";
    export default {
        name: "Recommend",
        components: {HotMvList, HotSongList, Header},
        data() {
            return{
                navInfo:{
                    activeIndex: 0,
                    nav:[
                        {name:"推荐", path:"/recommend"},
                        {name:"排行", path: "/rank"},
                        {name:"我喜欢", path: "/fav"},
                    ]
                }
            }
        },
        created() {

        }
    }
</script>

<style scoped lang="scss">
    @import "src/assets/css/mixin";

    .fixed{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
    }
    .searchBar{
        height: .4rem;
        padding: .08rem .4rem;
        background: var(--background-color);
        .content{
            text-align: center;
            font-size: var(--normal-s);
            @include fill;
            line-height: 1.5;
            background: white;
            border-radius: .5rem;
            color: var(--text-info);
            box-shadow: 0 3px 25px rgba(0,0,0,.05)
        }
    }
    .main{
        background: var(--background-color-light);
        margin-top: .88rem;

    }

</style>
