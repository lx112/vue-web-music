/**
 * singer 歌手页面
 */

// import base from './base'; // 导入接口域名列表
import axios from "@/utils/http"; // 导入http中创建的axios实例
// import qs from 'qs'; // 根据需求是否导入qs模块

const singerRequest = {
  // 推荐歌单
  getSinger(id) {
    return axios.get("/artists", { params: { id: id } });
  }
};

export default singerRequest;
