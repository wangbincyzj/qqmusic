<template>
    <div class="item">
        <div class="left">
            <h3 class="title">{{itemInfo.name}}</h3>
            <ul>
                <li class="nowrap" v-for="(item,index) in itemInfo.data"><span class="index">{{index+1}}.</span>{{item.name}}-<span class="name">{{item.singer[0].name}}</span></li>
            </ul>
        </div>
        <div class="right">
            <img :src="itemInfo.imgUrl" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "RankListItem",
        props:["itemInfo"],
        created() {
        }
    }
</script>

<style scoped lang="scss">
    .item{
        background: #fff;
        display: flex;
        padding-left: .15rem;
        border-radius: .08rem;
        overflow: hidden;
        .left{
            width: 70%;
            h3{
                font-weight: 600;
                font-size: var(--large);
                line-height: 2;
            }
            ul{
                li{
                    margin-top: .05rem;
                    font-size: var(--normal);
                    color: var(--text-color);
                    span.index{
                        font-weight: 600;
                    }
                    span.name{
                        color: var(--text-info);
                    }
                }
            }
        }
        .right{
            width: 30%;
            img{
                width: 100%;
            }
        }
    }
</style>
