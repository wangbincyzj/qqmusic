<template>
    <div class="progressBar" ref="progressBar">
        <div class="wrapper">
            <div class="progress" ref="progress"></div>
            <div class="progressBtnWrapper"
                 ref="progressBtn"
                 @touchstart.prevent="handleTouchStart"
                 @touchmove.prevent="handleTouchMove"
                 @touchend.prevent="handleTouchEnd"
            >
                <div class="progressBtn"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProgressBar",
        props:{
            percent:{
                type: Number,
                default: 0,
            }
        },
        data() {
            return {
                touch: {},
                barPercentWidth: null
            }
        },
        watch:{
            percent(newVal) {
                if(this.touch.onTouch){
                    return false
                }
                this._offset(newVal*this.barPercentWidth)
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                // todo 一直拿不到宽度,只能这样拿
                let ret = document.documentElement.style.fontSize.split("px")[0] * 1;
                this.barPercentWidth = 2.7 * ret - 16;
            },
            handleTouchStart(e) {
                this.touch.onTouch = true;
                this.touch.startX = e.touches[0].pageX;
                this.touch.left = this.$refs.progress.clientWidth
            },
            handleTouchMove(e) {
                this._emitPercent();
                let deltaX = e.touches[0].pageX - this.touch.startX;
                // 最大偏移量不能大过barPercentWidth,最小偏移量不能小于0
                const offsetWidth = Math.min(this.barPercentWidth, Math.max(0, this.touch.left + deltaX))
                this._offset(offsetWidth)
            },
            handleTouchEnd() {
                this.touch.onTouch = false;
                let percent = this.$refs.progress.clientWidth / this.barPercentWidth;
                this.$emit("percentChangeEnd", percent)
            },
            _offset(offsetWidth){
                this.$refs.progress.style.width = `${offsetWidth}px`;
                this.$refs.progressBtn.style.transform = `translateX(${offsetWidth}px)`
            },
            _emitPercent(){
                let percent = this.$refs.progress.clientWidth / this.barPercentWidth;
                this.$emit("percentChange", percent)
            }
        }
    }
</script>

<style scoped lang="scss">
    .progressBar {
        height: .3rem;
        width: 2.7rem;
        touch-action: none;
        .wrapper {
            position: relative;
            top: .13rem;
            height: .04rem;
            background: rgba(0, 0, 0, 0.3);

            .progress {
                position: absolute;
                left: 0;
                height: 100%;
                background: rgb(216, 255, 75)
            }

            .progressBtnWrapper {
                position: absolute;
                width: .32rem;
                height: .32rem;
                /*border: 1px solid red;*/
                top: -.13rem;
                left: -.08rem;

                .progressBtn {
                    position: relative;
                    top: .07rem;
                    left: .07rem;
                    width: .16rem;
                    height: .16rem;
                    border: .05rem solid #F1F1F1;
                    background: #D44439;
                    border-radius: 50%;

                }
            }
        }
    }
</style>
