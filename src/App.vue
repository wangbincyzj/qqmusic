<template>
    <div id="app">

        <keep-alive exclude="Mv,TopList,SongList">
            <router-view :class="{bottomGrow: $store.state.playlist.length>0}"/>
        </keep-alive>

        <Player/>
    </div>
</template>

<script>
    import Player from "@/views/player/Player";
    export default {
        name: "App",
        components: {Player},
        created() {

        }
    }
</script>

<style lang="scss">
    .bottomGrow{
        margin-bottom: .6rem;
    }
</style>
