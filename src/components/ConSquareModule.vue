<template>
  <div class="con-square-module" @click="$router.push(`/play-list/${data.id}`)">
    <p class="num">
      <i class="iconfont icon-bofangsanjiaoxing"></i
      >{{ dealNum(data.playCount) }}
    </p>
    <div class="play-list-img">
      <div class="fliter"></div>
      <img :src="data[img] + '?param=200y200'" />
    </div>
    <div class="content">
      <span>{{ data.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConSquareModule",
  props: {
    data: Object,
    img: String
  },
  methods: {
    dealNum(num) {
      const numStr = num + "";
      const leng = numStr.length;

      if (leng > 8) {
        return numStr.substr(0, leng - 8) + "亿";
      }
      if (leng > 4) {
        return numStr.substr(0, leng - 4) + "万";
      }
      return numStr;
    }
  }
};
</script>

<style lang="scss" scoped>
.con-square-module {
  position: relative;
  display: inline-block;
  height: 250px;

  .num {
    position: absolute;
    font-size: 24px;
    transform: scale(0.75);
    transform-origin: 0% 0%;
    z-index: 2;
    color: #fff;
    right: -14px;
    top: 8px;
    i {
      padding: 0 5px;
    }
  }

  .play-list-img {
    .fliter {
      position: relative;
      background: #000;
      opacity: 0.1;
      width: 200px;
      height: 200px;
      z-index: 1;
    }
    img {
      position: absolute;
      top: 0;
      width: 200px;
      border-radius: 10px;
    }
  }

  .content {
    position: absolute;
    top: 204px;
    span {
      display: inline-block;
      width: 280px;
      font-size: 24px;
      line-height: 30px;
      transform: scale(0.75);
      transform-origin: 0% 0%;
      letter-spacing: 1px;
    }
  }
}
</style>
