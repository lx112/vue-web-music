<template>
  <div class="con-song-lists">
    <div class="playAll" @click="select(songs[0], true)">
      <i class="iconfont icon-bofang1"></i>
      <p>
        <span>播放全部</span>
        <span> (共{{ songs.length }}首)</span>
      </p>
    </div>

    <div class="song-list" ref="playList">
      <div class="wrapper">
        <ConSongList
          v-for="(song, index) in songs"
          :class="{ active: song.id === $store.state.currentSong.id }"
          :key="index"
          :song="song"
          :index="index"
          :songName="song.name"
          :artistsName="song.ar[0].name"
          @select="select"
          :albumName="song.al.name"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ConSongList from "../components/ConSongList";
import { mapActions } from "vuex";
import BScroll from "better-scroll";

export default {
  name: "ConSongLists",
  props: {
    songs: Array
  },
  mounted() {
    setTimeout(() => {
      new BScroll(this.$refs.playList, {
        scrollY: true,
        click: true
      });
    }, 20);
  },
  methods: {
    ...mapActions({
      setCurrentSong: "setCurrentSong",
      setCurrentPlayList: "setCurrentPlayList"
    }),
    select(song, all = false) {
      this.$api.playerRequest.getSongUrl(song.id).then(res => {
        this.setCurrentSong({
          currentIndex: 0,
          currentSong: res.data[0],
          currentSongDetail: song
        });
        this.setCurrentPlayList({
          currentPlayList: all
            ? this.songs
            : [song, ...this.$store.state.currentPlayList]
        });
      });
    }
  },
  components: {
    ConSongList
  }
};
</script>

<style lang="scss" scoped>
.con-song-lists {
  .playAll {
    height: 100px;
    width: 100%;
    background: #fff;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    display: flex;
    align-items: center;
    font-size: 28px;
    i {
      width: 80px;
      font-size: 40px;
      text-align: center;
    }
    span:last-child {
      font-size: 24px;
      color: #aaa;
    }
  }
  .song-list {
    overflow: hidden;
    height: calc(100vh - 540px);
    padding: 0 20px;
    .con-song-list:last-child {
      padding-bottom: 100px;
    }
  }
}
</style>
