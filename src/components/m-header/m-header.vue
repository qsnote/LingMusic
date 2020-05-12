<template>
    <div class="m-header">
        <div class="icon"></div>
        <h1 class="text">Ling Music</h1>
    </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
    @import '~common/stylus/variable'
    @import '~common/stylus/mixin'

    .m-header
        position relative
        height 44px
        text-align center
        font-size 0
        color $color-theme

        .icon
            display inline-block
            vertical-align top
            margin-top 6px
            width 30px
            height 32px
            margin-right 9px
            bg-image('logo')

</style>