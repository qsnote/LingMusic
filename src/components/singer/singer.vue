<template>
    <div class="singer">
        <list-view ref="list"></list-view>
    </div>
</template>
<script>
import ListView from 'base/listview/listview'
import { ERR_OK } from 'api/config'
import { getSingerList } from 'api/singer'
export default {
  components: {
    ListView
  },
  data() {
    return {
      singers: []
    }
  },
  created() {
    this._getSingerList()
  },
  methods: {
    _getSingerList() {
      getSingerList().then(res => {
        if (res.code === ERR_OK) {
          this.singers = res.data.list
          console.log(res.data.list)
        }
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
    .singer
        position fixed
        top 88px
        bottom 0
        width 100%
</style>