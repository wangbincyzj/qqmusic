<template>
    <div class="header" ref="header" :style="style">
        <div class="left" @click="$emit('leftClick')">
            <slot name="left"/>
        </div>
        <div class="center nowrap" @click="$emit('centerClick')">
            <slot name="center"/>
        </div>
        <div class="right" @click="$emit('rightClick')">
            <slot name="right"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header3",
        props: {
            bgc: {
                type: String,
                default: "F7F8FA"
            },
            color:{
                type: String,
                default: "#8156e8"
            }
        },
        computed: {
            style() {
                return {
                    backgroundColor: this.bgc,
                    color: this.color
                }
            }
        },
        mounted() {

        }
    }
</script>

<style scoped lang="scss">
    .header {
        display: flex;
        line-height: .48rem;
        text-align: center;

        .left {
            width: 20%;
            font-size: var(--normal-s);
        }

        .center {
            width: 60%;
        }

        .right {
            width: 20%;
            font-size: var(--normal-s);
        }
    }
</style>
