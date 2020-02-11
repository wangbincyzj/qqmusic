<template>
    <div class="item" @click="$router.push(`/list/${itemInfo.dissid}`)">
        <img :src="itemInfo.imgurl" alt="">
        <p>{{itemInfo.dissname}}</p>
    </div>
</template>

<script>
    export default {
        name: "HotSongListItem",
        props:["itemInfo"]
    }
</script>

<style scoped lang="scss">
    .item{
        width: 100%;
        height: 100%;
        img{
            width: 1.2rem;
            height: 1.2rem;
            border-radius: .1rem;
        }
        p{
            margin-top: .05rem;
            font-size: var(--small-s);
            color: var(--text-info);
        }
    }

</style>
