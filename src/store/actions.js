export const setPlaying = function({ commit }, playing) {
  commit("setPlaying", playing);
};
export const changePlayerFullScreen = function({ commit }) {
  commit("changePlayerFullScreen");
};

export const setPlayMode = function({ commit }, mode) {
  commit("setPlayMode", mode);
};

export const setCurrentSong = function(
  { commit },
  { currentSong, currentSongDetail, currentIndex }
) {
  console.log(currentSong, currentSongDetail, currentIndex);
  commit("setPlaying", true);
  commit("setCurrentIndex", currentIndex);
  commit("setCurrentSong", currentSong);
  commit("setCurrentSongDetail", currentSongDetail);
};

export const setCurrentPlayList = function({ commit }, { currentPlayList }) {
  console.log(currentPlayList);
  commit("setCurrentPlayList", currentPlayList);
};
