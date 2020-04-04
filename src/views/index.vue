<template>
  <div class="index">
    <header>
      <i class="iconfont icon-navicon"></i>
      <div class="tab-bar">
        <router-link
          v-for="(item, index) in tabBar"
          :key="index"
          :to="item.path"
          active-class="is-selected"
          >{{ item.title }}
        </router-link>
      </div>
      <i class="iconfont icon-search" @click="$router.push('search')"></i>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      tabBar: [
        { title: "我的", path: "user" },
        { title: "发现", path: "found" },
        { title: "云村", path: "yunchun" },
        { title: "视频", path: "video" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.index {
  header {
    position: relative;
    width: 100%;
    height: 100px;
    i {
      position: absolute;
      font-size: 50px;
      top: 42px;
      &.icon-navicon {
        left: 20px;
      }
      &.icon-search {
        right: 20px;
      }
    }
    .tab-bar {
      width: 60%;
      margin: 0 auto;
      display: flex;
      text-align: center;
      a {
        position: relative;
        padding-top: 20px;
        font-size: 26px;
        font-weight: 550;
        flex: 1;
        color: #999;
        line-height: 90px;
        transition: all 0.2s;
        &:after {
          content: "";
          display: block;
          position: absolute;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          top: 14px;
          left: 7px;
          transform: scale(0, 0);
          background: #ccc;
          z-index: -1;
        }
        &.is-selected {
          font-size: 32px;
          color: #333;
          transition: all 0.3s;
          &:after {
            animation: bgCircleOutIn 0.5s;
          }
        }
      }
    }
  }
}

@keyframes bgCircleOutIn {
  0% {
    transform: scale(0, 0);
  }
  50% {
    transform: scale(1, 1);
  }
  70% {
    transform: scale(1, 1);
    opacity: 0.5;
  }
  100% {
    transform: scale(1, 1);
    opacity: 0;
  }
}
</style>
