/**
 * player 歌曲播放器 模块接口列表
 */

// import base from './base'; // 导入接口域名列表
import axios from "@/utils/http"; // 导入http中创建的axios实例
// import qs from 'qs'; // 根据需求是否导入qs模块

const playerRequest = {
  //歌曲url
  getSongUrl(id) {
    return axios.get("/song/url", { params: { id: id } });
  },
  // 歌曲数据
  getSongDetail(ids) {
    return axios.get("/song/detail", { params: { ids: ids } });
  }
};

export default playerRequest;
