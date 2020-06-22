import * as types from './mutation-types'

const mutations = {
  [types.SET_SINGER](state, singer) {
    state.singer = singer
    console.log(singer, '22222')
  }
}

export default mutations