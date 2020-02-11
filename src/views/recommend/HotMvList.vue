<template>
    <div class="hotMv">
        <h3>热门MV</h3>
        <ul>
            <li v-for="item in listItems" v-if="listItems" :key="item.id">
                <HotMvListItem :item-info="item"/>
            </li>
        </ul>
    </div>
</template>

<script>
    import HotMvListItem from "@/views/recommend/HotMvListItem";
    import {mv_api} from "@/api/mv";

    export default {
        name: "HotMvList",
        components: {HotMvListItem},
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
                mv_api.getMvHot().then(ret => {
                    if (ret.code === 200) {
                        this.listItems = ret.data.list;
                    }
                })

            }
        }
    }
</script>

<style scoped lang="scss">
    .hotMv {
        h3 {
            padding-left: .15rem;
            font-size: var(--large);
            font-weight: 600;
            line-height: 2;
        }

        ul {
            li {
                margin-bottom: .3rem;
                background: var(--background-color);
            }
        }
    }
</style>
