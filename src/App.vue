<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <!-- 路由匹配到的组件会显示在router-view位置 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
import Tab from 'components/tab/tab'
export default {
  components: {
    MHeader,
    Tab
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped></style>
