/**
 * found 发现页 模块接口列表
 */

// import base from './base'; // 导入接口域名列表
import axios from "@/utils/http"; // 导入http中创建的axios实例
// import qs from 'qs'; // 根据需求是否导入qs模块

const foundRequest = {
  // 轮播图数据
  getBanners() {
    return axios.get("/banner");
  },
  // 推荐歌单
  getRecommendPlayList(limit = 15) {
    return axios.get("/personalized", { params: { limit: limit } });
  }
};

export default foundRequest;
