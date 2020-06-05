<template>
    <div class="singer">
        <list-view ref="list" :data="singers" @select="selectSinger"></list-view>
        <router-view></router-view>
    </div>
</template>
<script>
import ListView from 'base/listview/listview'
import { ERR_OK } from 'api/config'
import { getSingerList } from 'api/singer'
import Singer from 'common/js/singer'

const HOT_NAME = '热门'
const HOT_SINGER_LEN = 10

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
    selectSinger(singer) {
      this.$router.push({
        // path:``
      })
    },
    _getSingerList() {
      getSingerList().then(res => {
        if (res.code === ERR_OK) {
          this.singers = this._normalizeSinger(res.data.list)
        }
      })
    },
    _normalizeSinger(list) {
      let map = {
        hot: {
          title: HOT_NAME,
          items: []
        }
      }
      list.forEach((elem, index) => {
        if (index < HOT_SINGER_LEN) {
          map.hot.items.push(new Singer({
            id: elem.Fsinger_mid,
            name: elem.Fsinger_name
          })
          )
        }
        const key = elem.Findex
        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          }
        }
        map[key].items.push(new Singer({
          id: elem.Fsinger_mid,
          name: elem.Fsinger_name
        }))
      })
      // 让map变成有序列表
      let hot = []
      let ret = []
      for (let key in map) {
        let val = map[key]
        if (val.title.match(/[a-zA-Z]/)) {
          ret.push(val)
        } else if (val.title === HOT_NAME) {
          hot.push(val)
        }
      }
      ret.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })

      return hot.concat(ret)
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