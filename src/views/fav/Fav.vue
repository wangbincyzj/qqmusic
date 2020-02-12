<template>
    <div class="fav">
        <Header :nav-info="navInfo" />
    </div>
</template>

<script>
    import Header from "@/components/project/Header";
    import storage from "good-storage"
    export default {
        name: "Fav",
        components: {Header},
        data() {
            return{
                navInfo:{
                    activeIndex: 2,
                    nav:[
                        {name:"推荐", path:"/recommend"},
                        {name:"排行", path: "/rank"},
                        {name:"我喜欢", path: "/fav"},
                    ]
                }
            }
        }
    }
</script>

<style scoped>

</style>
