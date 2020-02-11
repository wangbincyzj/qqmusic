<template>
    <ul>
        <li
                v-for="(item,index) in this.navInfo.nav"
                :class="{active:index===navInfo.activeIndex}"
                @click="$router.push(item.path)"
        >
            {{item.name}}
        </li>
    </ul>
</template>

<script>
    export default {
        name: "Header",
        props: ["navInfo"],
    }
</script>

<style scoped lang="scss">
    @import "src/assets/css/mixin";
    ul{
        @include flex-x;
        line-height: 3;
        background: var(--background-color);
        color: var(--text-info);
        li{
            flex: 1;
            text-align: center;
            &.active{
                color: #8156e8;
                position: relative;
                &::after{
                    content: "";
                    width: 20%;
                    position: absolute;
                    left: 50%;
                    bottom: .05rem;
                    transform: translateX(-50%);
                    border-bottom: 2px solid #fa192e;
                }
            }
        }
    }
</style>
