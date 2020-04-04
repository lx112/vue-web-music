<template>
  <div class="con-player">
    <div v-if="currentSongDetail">
      <div class="full" v-show="this.playerFullScreen">
        <div
          class="bg-bg"
          :style="{ 'background-image': `url(${currentSongDetail.al.picUrl})` }"
        ></div>
        <TopBar
          @backMethod="changePlayerFullScreen"
          :title="currentSongDetail.name"
          :title-sub="currentSongDetail.ar[0].name"
          icon="fenxiang1"
        />
        <div class="middle">
          <div class="record">
            <div class="bg-transparent"></div>
            <img
              class="bg-cd"
              src="../assets/images/bg-vinyl.png"
              :style="{ 'animation-play-state': rotatePaused }"
              alt
            />
            <img
              class="cd"
              v-lazy="currentSongDetail.al.picUrl"
              :style="{ 'animation-play-state': rotatePaused }"
              alt
            />
          </div>
        </div>
        <footer>
          <div class="icon-bar-wrap">
            <i class="iconfont icon-yizhuifan"></i>
            <i class="iconfont icon-ziyuan"></i>
            <i class="iconfont icon-yinle2"></i>
            <i class="iconfont icon-pinglun"></i>
            <i class="iconfont icon-ellipsis-circle"></i>
          </div>
          <div class="scroll-bar-wrap">
            <span v-html="currentTime"></span>
            <div class="scroll-bar" ref="scrollBar">
              <div
                class="progress-dark"
                @touchstart="barTouchStart"
                @touchmove="barTouchMove"
                @touchend="barTouchEnd"
              ></div>
              <div
                class="progress-big"
                @touchstart="barTouchStart"
                @touchmove="barTouchMove"
                @touchend="barTouchEnd"
                :style="{ width: `${barX * 100}%` }"
              ></div>
              <div
                class="bar"
                @touchstart="barTouchStart"
                @touchmove="barTouchMove"
                @touchend="barTouchEnd"
                :style="{ left: `${barX * 100}%`, transform: barScale }"
              ></div>
            </div>
            <span v-html="duration"></span>
          </div>
          <div class="controll">
            <i :class="`iconfont icon-${playMode[1]}`" @click="toggelMode"></i>
            <i
              class="iconfont icon-shangyiqu101"
              @click="audioChangeSong(false)"
            ></i>
            <i
              class="iconfont"
              :class="[playing ? 'icon-zanting' : 'icon-bofang1']"
              @click="audioPlay(false)"
            ></i>
            <i
              class="iconfont icon-xiayiqu101"
              @click="audioChangeSong(true)"
            ></i>
            <i
              class="iconfont icon-PlayListbofangliebiao"
              @click="showPlayList = !showPlayList"
            ></i>
          </div>
        </footer>
      </div>

      <div
        class="normal"
        v-show="!this.playerFullScreen"
        @click="changePlayerFullScreen"
      >
        <div class="wrapper">
          <img v-lazy="currentSongDetail.al.picUrl" />
          <p>
            <span v-html="currentSongDetail.name"></span>
            <span v-html="currentSongDetail.ar[0].name"></span>
          </p>
          <i
            class="iconfont"
            :class="[playing ? 'icon-zanting' : 'icon-bofang']"
            @click.stop="audioPlay(false)"
          ></i>
          <i
            class="iconfont icon-24gf-playlist"
            @click.stop="showPlayList = !showPlayList"
          ></i>
        </div>
      </div>
    </div>
    <audio
      @playing="audioPlaying"
      @pause="audioPlaying"
      @canplay="audioPlay"
      @timeupdate="audioTimeupdate"
      @ended="audioEnd"
      :src="currentSong.url"
      ref="audio"
    ></audio>
    <Popup
      v-model="showPlayList"
      round
      position="bottom"
      :style="{
        width: '90%',
        height: '70%',
        'margin-left': '5%',
        'border-radius': '10px',
        'margin-bottom': '10px'
      }"
    >
      <div class="pop-play-list">
        <header>
          <p>
            当前播放<span>({{ currentPlayList.length }})</span>
          </p>
          <div>
            <p>
              <i :class="`iconfont icon-${playMode[1]}`"></i
              ><span>{{ playMode[2] }}</span>
            </p>
            <p>
              <i class="iconfont icon-shoucangjia"></i>
              <span>收藏全部</span>
              <span
                class="iconfont icon-shanchu van-hairline--left"
                @click="deleteSong(index, true)"
              ></span>
            </p>
          </div>
        </header>
        <div
          class="pop-song"
          v-for="(item, index) in currentPlayList"
          :key="index"
        >
          <p>
            {{ item.al.name }}<span> - {{ item.ar[0].name }}</span>
          </p>
          <i class="iconfont icon-guanbixiao" @click="deleteSong(index)"></i>
        </div>
      </div>
    </Popup>
  </div>
</template>

<script>
import { Lazyload, Popup } from "vant";
import { mapGetters, mapActions } from "vuex";
import TopBar from "../components/ConTopBar";
export default {
  name: "Player",
  data() {
    return {
      ct: 0,
      currentTime: "00:00",
      duration: "00:00",
      barX: 0,
      barScale: "scale(1)",
      touch: false,
      rotatePaused: "",
      mode: [
        [0, "xunhuanbofang", "列表循环"],
        [1, "danquxunhuan1", "单曲循环"],
        [2, "suijibofang", "随机播放"]
      ],
      showPlayList: false
    };
  },
  computed: {
    ...mapGetters([
      "playing",
      "playerFullScreen",
      "playMode",

      "currentSong",
      "currentIndex",
      "currentSongDetail",
      "currentPlayList"
    ])
  },
  methods: {
    audioPlaying() {
      this.rotatePaused = this.$refs.audio.paused ? "paused" : "";
    },
    audioEnd() {
      if (this.playMode[0] === 1) {
        this.$refs.audio.currentTime = 0;
      } else {
        this.audioChangeSong();
      }
    },
    audioTimeupdate() {
      if (!this.$refs.audio || this.touch) return;
      if (parseInt(this.$refs.audio.currentTime) === this.ct) return;
      this.barX =
        this.$refs.audio.currentTime / (this.currentSongDetail.dt / 1000);
      this.ct = parseInt(this.$refs.audio.currentTime);
      this.currentTime = this.getCompleteTime(this.ct);
      this.$forceUpdate();
    },
    toggelMode() {
      let playMode = (this.playMode[0] + 1) % 3;
      this.setPlayMode(this.mode[playMode]);
    },
    audioPlay(state) {
      state ? this.setPlaying(state) : this.setPlaying(!this.playing);
      this.duration = this.getCompleteTime(this.currentSongDetail.dt / 1000);
      this.playing ? this.$refs.audio.play() : this.$refs.audio.pause();
    },

    audioChangeSong(order = true) {
      if (this.playMode[0] === 2) {
        this.randomBroadcast();
      } else {
        let index;
        if (order) {
          index =
            this.currentIndex === this.currentPlayList.length - 1
              ? 0
              : this.currentIndex + 1;
        } else {
          index = this.currentIndex
            ? this.currentIndex - 1
            : this.currentPlayList.length - 1;
        }
        this.setSong(index);
      }
    },
    getCompleteTime(time) {
      let h = parseInt(time / 3600);
      let m = parseInt((time % 3600) / 60);
      let s = parseInt((time % 3600) % 60);
      let ct = "";
      h && ct + h + ":";
      ct += String(m).length > 1 ? m : "0" + m + ":";
      ct += String(s).length > 1 ? s : "0" + s;
      return ct;
    },
    randomBroadcast() {
      let random = Math.floor(Math.random() * this.currentPlayList.length);
      random !== this.currentIndex
        ? this.setSong(random)
        : this.randomBroadcast();
    },
    setSong(index) {
      this.$api.playerRequest
        .getSongUrl(this.currentPlayList[index].id)
        .then(res => {
          this.setCurrentSong({
            currentIndex: index,
            currentSong: res.data[0],
            currentSongDetail: this.currentPlayList[index]
          });
        });
    },
    barTouchStart() {
      this.barScale = "scale(2)";
      this.touch = true;
      this.barTouchMove();
    },
    barTouchMove() {
      let percent =
        (event.touches[0].pageX - this.$refs.scrollBar.offsetLeft) /
        this.$refs.scrollBar.clientWidth;
      this.barX = percent > 1 ? "1" : percent < 0 ? 0 : percent;
      this.currentTime = this.getCompleteTime(
        this.barX * this.$refs.audio.duration
      );
    },
    barTouchEnd() {
      this.barScale = "scale(1)";
      this.touch = false;
      this.$refs.audio.currentTime = this.$refs.audio.duration * this.barX;
      this.playing ? this.$refs.audio.play() : this.$refs.audio.pause();
    },
    deleteSong(index, all = false) {
      if (all) {
        console.log(all);
        // this.setCurrentPlayList({ currentPlayList: {} });
      } else {
        console.log(index, this.currentPlayList);
        this.currentPlayList.splice(index, 1);
        console.log(this.currentPlayList);
      }
    },
    ...mapActions({
      setPlaying: "setPlaying",
      setPlayMode: "setPlayMode",
      changePlayerFullScreen: "changePlayerFullScreen",
      setCurrentSong: "setCurrentSong"
    })
  },
  components: {
    TopBar,
    Popup
  },
  directives: {
    vLazy: Lazyload
  }
};
</script>

<style lang="scss" scoped>
@keyframes imgRotate {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

.con-player {
  overflow: hidden;
  width: 100%;
  height: 100%;
  .bg-bg {
    position: absolute;
    left: -50%;
    top: -50%;
    z-index: -1;
    width: 200%;
    height: 200%;
    background: inherit;
    filter: blur(100px) brightness(70%) opacity(0.8);
    content: "";
    transform: scale(0.95);
  }
  .full {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 999;
    background: #f2f3f4;
    .background {
      position: absolute;
      width: 300%;
      height: 300%;
      top: -50%;
      left: -50%;
      z-index: -1;
      opacity: 0.6;
      filter: blur(30px);
      .fliter {
        position: absolute;
        width: 100%;
        height: 100%;
        background: black;
        opacity: 0.6;
      }
      img {
        width: 100%;
      }
    }
    .middle {
      width: 100%;
      height: 750px;
      .record {
        margin-top: 150px;
        width: 100%;
        height: 800px;
        position: relative;
        .bg-transparent {
          position: absolute;
          left: 94px;
          top: -30px;
          width: 560px;
          height: 560px;
          border-radius: 50%;
          background: #999;
          opacity: 0.3;
        }
        img {
          position: absolute;
          display: inline-block;
          border-radius: 50%;
          animation: imgRotate 10s linear infinite;
          &.bg-cd {
            width: 550px;
            height: 550px;
            left: 100px;
            top: -25px;
          }
          &.cd {
            width: 370px;
            height: 370px;
            left: 88px;
            top: -36px;
            margin: 100px;
          }
        }
      }
    }
    footer {
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 300px;
      .controll,
      .icon-bar-wrap {
        position: relative;
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        color: #fff;
        i {
          font-size: 46px;
        }
      }
      .scroll-bar-wrap {
        display: inline-block;
        width: 100%;
        font-size: 24px;
        text-align: center;
        span {
          display: inline-block;
          width: 100px;
          vertical-align: middle;
          color: #fff;
        }
        .scroll-bar {
          position: relative;
          display: inline-block;
          width: 70%;
          height: 60px;
          .progress-dark,
          .progress-big {
            position: absolute;
            left: 0;
            height: 4px;
            top: 54px;
          }
          .progress-dark {
            width: 100%;
            background: #bbb;
          }
          .progress-big {
            background: #eee;
          }
          .bar {
            position: absolute;
            top: 52px;
            width: 10px;
            height: 10px;
            left: -0.5%;
            border-radius: 50%;
            background: #fff;
          }
        }
      }
      .controll {
        margin-top: 20px;
        i:nth-of-type(3) {
          font-size: 80px;
        }
      }
    }
  }
  .normal {
    position: fixed;
    width: 100%;
    bottom: 0;
    height: 100px;
    border-top: 1px solid #eee;
    z-index: 99;
    background: #fff;
    .wrapper {
      display: flex;
      padding: 10px 20px;
      align-items: center;
      img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
      }
      p {
        padding-left: 20px;
        padding-top: 10px;
        width: calc(100% - 260px);
        span {
          width: 100%;
          display: inline-block;
          font-size: 28px;
          height: 30px;
          line-height: 30px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          &:last-child {
            font-size: 24px;
            color: #aaa;
          }
        }
      }
      i {
        position: absolute;
        font-size: 50px;
        right: 100px;
        &:last-child {
          right: 20px;
        }
      }
    }
  }
  .pop-play-list {
    padding: 30px;
    font-size: 32px;
    i {
      color: #999;
    }
    header {
      margin-bottom: 40px;
      p {
        font-weight: bold;
        margin-bottom: 20px;
      }
      div {
        display: flex;
        justify-content: space-between;
        p {
          font-weight: initial;
          font-size: 24px;
          i {
            font-size: 36px;
          }
          span {
            padding: 0 20px;
          }
          .icon-shanchu {
            font-size: 36px;
            padding-right: 0;
            color: #999;
          }
        }
      }
    }
    .pop-song {
      padding: 20px 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: calc(100% - 60px);
        span {
          font-size: 24px;
          color: #111;
          opacity: 0.6;
        }
      }
      i {
        padding-right: 7px;
      }
    }
  }
}
</style>
