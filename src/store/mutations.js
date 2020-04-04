const mutations = {
  setPlaying(state, playing) {
    state.playing = playing;
  },

  changePlayerFullScreen(state) {
    state.playerFullScreen = !state.playerFullScreen;
  },

  setPlayMode(state, playMode) {
    state.playMode = playMode;
  },

  setCurrentIndex(state, currentIndex) {
    state.currentIndex = currentIndex;
  },

  setCurrentSong(state, currentSong) {
    state.currentSong = currentSong;
  },

  setCurrentSongDetail(state, currentSongDetail) {
    state.currentSongDetail = currentSongDetail;
  },

  setCurrentPlayList(state, currentPlayList) {
    state.currentPlayList = currentPlayList;
  }
};

export default mutations;
