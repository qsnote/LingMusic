export const singer = state => state.singer

export const playing = state => state.playing

export const fullScreen = state => state.fullScreen

export const playList = state => state.playList

export const sequenceList = state => state.sequenceList

export const mode = state => state.mode

export const currentindex = state => state.currentindex

export const currentSong = state => {
  console.log(333)
  return state.playList[state.currentIndex] || {}
}
