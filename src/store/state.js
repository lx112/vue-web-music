const state = {
  // 播放器
  playing: null, //播放状态
  playerFullScreen: false, //全屏
  playMode: [0, "xunhuanbofang", "列表循环"], //播放模式 0：顺序，1：单曲，2：随机

  // 歌曲
  currentIndex: null, //当前播放序号
  currentSong: {}, //当前歌曲
  currentSongDetail: null, //当前歌曲详情
  currentPlayList: [], //当前播放列表

  //默认图片
  defaultimg: 'this.src="' + require("../assets/images/bg-none.jpg") + '"'
};

export default state;
