<template>
  <div class="found">
    <!-- 轮播图 -->
    <div class="found-swipe">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(banner, index) in banners" :key="index">
          <img :src="banner.imageUrl" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 推荐歌单 -->
    <div class="recommend-play-list">
      <p class="title">推荐歌单</p>
      <div class="title-sup">
        <p>为你精挑细选</p>
        <p @click="$router.push('play-lists')">查看更多</p>
      </div>
      <div class="play-list-wrap" ref="playListWrap">
        <div class="play-list">
          <ConSquareModule
            v-for="(item, index) in playList"
            :key="index"
            :data="item"
            img="picUrl"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem, Lazyload } from "vant";
import BScroll from "better-scroll";
import ConSquareModule from "../components/ConSquareModule";

export default {
  name: "Found",
  data() {
    return {
      banners: null,
      playList: null
    };
  },
  created() {
    this.$api.foundRequest.getBanners().then(res => {
      this.banners = res.banners;
    });
    this.$api.foundRequest.getRecommendPlayList(6).then(res => {
      this.playList = res.result;
      new BScroll(this.$refs.playListWrap, {
        scrollX: true,
        bounce: false,
        click: true
      });
    });
  },
  components: {
    vanSwipe: Swipe,
    vanSwipeItem: SwipeItem,
    ConSquareModule
  },
  directives: {
    vLazy: Lazyload
  }
};
</script>

<style lang="scss" scoped>
.found {
  width: 100%;
  .found-swipe {
    padding: 20px;
    .van-swipe {
      padding: 0;
      border-radius: 10px 10px 20px 20px;
      .van-swipe-item {
        img {
          width: 100%;
        }
      }
    }
  }
  .recommend-play-list {
    display: block;
    margin-top: 20px;
    .title {
      font-size: 24px;
      color: #aaa;
      transform: scale(0.8);
      transform-origin: 0% 0%;
      padding-left: 26px;
      letter-spacing: 1px;
    }
    .title-sup {
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      font-size: 30px;
      line-height: 30px;
      margin-bottom: 20px;
      padding-top: 4px;
      p:first-child {
        font-weight: bold;
      }
      p:last-child {
        display: inline-block;
        padding: 6px 20px;
        border-radius: 20px;
        border: 1px solid #ccc;
        font-weight: initial;
        font-size: 24px;
        transform: scale(0.75);
        margin-right: -32px;
        transform-origin: 0% 0%;
      }
    }

    .play-list-wrap {
      overflow: hidden;
      .play-list {
        width: 1350px;
        padding: 0 20px;
        height: 250px;
        .con-square-module {
          margin-right: 30px;
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
}
</style>
