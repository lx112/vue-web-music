<template>
  <div class="singer" v-if="singer">
    <div class="singer-wrap">
      <div
        class="background"
        :style="{
          background: `url(${singer.picUrl}) 50% 0/ 100% no-repeat`
        }"
      ></div>
      <ConTopBar :is-back="true" :title="singer.name" icon="ellipsis" />

      <ConSongLists v-if="songList" :songs="songList" />
    </div>
  </div>
</template>

<script>
import ConTopBar from "../components/ConTopBar";
import ConSongLists from "../components/ConSongLists";

export default {
  name: "Singer",
  data() {
    return {
      singer: null,
      playList: null,
      songList: null
    };
  },
  created() {
    this.$api.singerRequest.getSinger(this.$route.params.id).then(res => {
      this.singer = res.artist;
      this.playList = res.hotSongs;
      let ids = res.hotSongs
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
.singer {
  .background {
    position: absolute;
    width: 100%;
    height: 600px;
    z-index: -1;
  }
  .con-song-lists {
    margin-top: 420px;
    /deep/ .song-list {
      height: calc(100vh - 640px);
    }
  }
}
</style>
