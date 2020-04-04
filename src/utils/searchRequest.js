/**
 * Search 搜索用接口
 */

// import base from './base'; // 导入接口域名列表
import axios from "@/utils/http"; // 导入http中创建的axios实例
// import qs from 'qs'; // 根据需求是否导入qs模块

const searchRequest = {
  // 默认搜索建议
  getSearchDefault() {
    return axios.get("/search/default");
  },
  //  搜索
  search(keywords, type, limit, offset) {
    return axios.get("/search", {
      params: { keywords: keywords, type: type, limit: limit, offset: offset }
    });
  }
};

export default searchRequest;
