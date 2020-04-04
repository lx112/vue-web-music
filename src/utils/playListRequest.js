/**
 * playList 歌单页 模块接口列表
 */

// import base from './base'; // 导入接口域名列表
import axios from "@/utils/http"; // 导入http中创建的axios实例
// import qs from 'qs'; // 根据需求是否导入qs模块

const playListRequest = {
  // 歌单详情
  getPlayListDetail(id) {
    return axios.get("/playlist/detail", { params: { id: id } });
  },
  // 热门歌单分类
  getPlayListHotCatList() {
    return axios.get("/playlist/hot");
  },
  // 歌单分类
  getPlayListCatList() {
    return axios.get("/playlist/catlist");
  },
  // 精品歌单
  // cat 分类， before 上一页页码
  getPlayListHighquality(cat, limit, before) {
    console.log(cat, limit);
    return axios.get("/top/playlist/highquality", {
      params: { cat: cat, limit: limit, before: before }
    });
  },
  // 可排序歌单
  getTopPlayList(cat, limit, order) {
    return axios.get("/top/playlist", {
      params: { cat: cat, limit: limit, order: order }
    });
  }
};

export default playListRequest;
