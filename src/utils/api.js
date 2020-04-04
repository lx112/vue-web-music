/**
 * api接口的统一出口
 */
// 文章模块接口
import foundRequest from "./foundRequest";
// 音乐模块接口
import playerRequest from "./playerRequest";
// 歌单模块接口
import playListRequest from "./playListRequest";
// 搜索用接口
import searchRequest from "./searchRequest";
// 歌手页面接口
import singerRequest from "./singerRequest";

// 其他模块的接口……

// 导出接口
export default {
  foundRequest,
  playerRequest,
  playListRequest,
  searchRequest,
  singerRequest
};
