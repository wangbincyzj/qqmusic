<template>
    <div class="mv" v-if="videoInfo">
        <div class="top">
            <Header3 @leftClick="$router.back()">
                <template #left>返回</template>
                <template #center>{{title}}</template>
            </Header3>

            <video
                    v-if="videoInfo"
                    :src="videoSrc"
                    controls
                    :poster="pic"

            />
        </div>


        <a class="download" download="test.mp4" :href="videoSrc">下载</a>

        <div class="info" v-if="videoInfo">
            <h3>简介</h3>
            <p>歌手:{{videoInfo.singers[0].name}}</p>
            <p>{{videoInfo.desc}}</p>
        </div>
    </div>
</template>

<script>
    import {mv_api} from "@/api/mv";
    import Header3 from "@/components/common/Header3";

    export default {
        name: "Mv",
        components: {Header3},
        data() {
            return {
                videoInfo: null,
                mvId: null,
                videoSrc: null,
                title: "Mv",
                pic: null
            }
        },
        created() {
            this.init()
        },
        methods: {
            init() {
                let mvId = this.$route.params.id;
                this.videoSrc = `https://v1.itooi.cn/tencent/mvUrl?id=${mvId}&quality=480`
                mv_api.getMvDetail(mvId).then(ret => {
                    this.videoInfo = ret.data[mvId];
                    console.log(this.videoInfo);
                    this.title = this.videoInfo.name
                    this.pic = this.videoInfo.cover_pic;
                })
            },

        }
    }
</script>

<style scoped lang="scss">
    .mv{
        background: var(--background-color-light);
        color: var(--text-color);
        min-height: 100vh;
    }
    .top{
        min-height: 2.8rem;
    }
    video {
        width: 100%;
        min-height: 2.34rem;
    }
    .download{
        display: block;
        background: #8156e8;
        width: 80%;
        padding: .1rem;
        border-radius: .3rem;
        margin: .10rem auto;
        text-align: center;
        color: white;
    }
    .info{
        padding: .1rem;
        h3{
            line-height: .3rem;
            font-weight: 600;
        }
        p{
            line-height: 1.2;
            &:nth-of-type(1){
                color: var(--text-info);
                margin-bottom: .3rem;
            }
        }
    }
</style>
