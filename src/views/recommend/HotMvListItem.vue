<template>
    <div class="itemInfo clear" @click="$router.push(`/mv/${itemInfo.vid}`)">
        <img :src="itemInfo.picurl" alt="">
        <p>{{itemInfo.singers[0].name}}-{{itemInfo.title}}</p>
    </div>
</template>

<script>
    export default {
        name: "HotMvListItem",
        props: ["itemInfo"]
    }
</script>

<style scoped lang="scss">
    .itemInfo{
        img{
            width: 100%;
        }
        p{
            text-align: center;
            margin: .1rem 0;
            font-size: var(--normal);
        }
    }
</style>
