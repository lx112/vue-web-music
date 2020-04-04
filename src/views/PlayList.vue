<template>
  <div class="play-list" v-if="songList">
    <div class="play-list-wrap">
      <div class="background" :style="{ 'background-image': bgColor }">
        <div></div>
      </div>
      <ConTopBar :is-back="true" title="歌单" icon="ellipsis" />

      <header>
        <div class="left">
          <img v-lazy="playList.coverImgUrl" />
        </div>
        <div class="right">
          <p class="list-title">{{ playList.name }}</p>
          <div class="creater">
            <img :src="playList.creator.avatarUrl" />
            <div class="creater-name">
              <span>{{ playList.creator.nickname }}</span>
              <i class="iconfont icon-fangxiang-xiangyou"></i>
            </div>
          </div>
          <div class="list-title-sub">
            <p v-html="playList.description"></p>
            <i class="iconfont icon-fangxiang-xiangyou"></i>
          </div>
        </div>
      </header>

      <ConSongLists v-if="songList" :songs="songList" />
    </div>
  </div>
</template>

<script>
import ConTopBar from "../components/ConTopBar";
import ConSongLists from "../components/ConSongLists";
import analyze from "rgbaster";

export default {
  name: "PlayList",
  data() {
    return {
      playList: null,
      songList: null,
      bgColor: null,
      bg: null
    };
  },
  created() {
    this.$api.playListRequest
      .getPlayListDetail(this.$route.params.id)
      .then(res => {
        this.playList = res.playlist;
        analyze(this.playList.coverImgUrl, {
          scale: 0.4,
          ignore: ["rgb(255,255,255)", "rgb(0,0,0)"]
        }).then(res => {
          let end = res[1000] || res[res.length];
          this.bgColor = `linear-gradient(to right, ${end.color}, ${
            res[parseInt(res.length / 2)].color
          })`;
        });
        let ids = this.playList.trackIds
          .map(v => {
            return v.id;
          })
          .join(",");
        this.$api.playerRequest.getSongDetail(ids).then(res => {
          this.songList = res.songs;
        });
      });
  },
  components: {
    ConTopBar,
    ConSongLists
  }
};
</script>

<style lang="scss" scoped>
.play-list {
  .background {
    position: absolute;
    width: 100%;
    height: 500px;
    z-index: -1;
    div {
      width: 100%;
      height: 100%;
      position: absolute;
      background: #ccc;
      opacity: 0.2;
    }
  }
  .play-list-wrap {
    header {
      margin-top: 20px;
      margin-bottom: 40px;
      padding: 0 30px;
      display: flex;
      color: #fff;
      .left {
        img {
          width: 240px;
          border-radius: 10px;
        }
      }
      .right {
        margin-left: 40px;
        position: relative;
        p.list-title {
          margin: 0;
          margin-bottom: 10px;
          font-size: 28px;
          line-height: 40px;
          font-weight: bold;
        }
        .creater {
          position: relative;
          margin: 20px 0 20px 0;
          img {
            display: inline-block;
            width: 50px;
            border-radius: 50%;
          }
          .creater-name {
            position: absolute;
            top: 16px;
            left: 70px;
            color: #ddd;
            font-size: 24px;
          }
        }
        .list-title-sub {
          position: absolute;
          bottom: 0;
          height: 60px;
          display: flex;
          justify-content: start;
          p {
            display: -webkit-box;
            white-space: pre-wrap;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            height: 130%;
            color: #ddd;
            font-size: 24px;
            line-height: 40px;
            transform: scale(0.75);
            transform-origin: 0% 0%;
          }
          i {
            font-size: 40px;
            line-height: 60px;
          }
        }
      }
    }
  }
}
</style>
