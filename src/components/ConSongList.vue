<template>
  <div class="con-song-list" @click="select">
    <div v-if="index !== undefined" class="index">
      <span>{{ index + 1 }}</span>
    </div>
    <div class="song-name">
      <p>{{ songName }}</p>
      <p>{{ artistsName }} - {{ albumName }}</p>
    </div>
    <div class="icon">
      <i class="iconfont icon-ellipsis"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConSongList",
  props: {
    song: Object,
    index: Number,
    songName: String,
    artistsName: String,
    albumName: String
  },
  methods: {
    select() {
      this.$emit("select", this.song);
    }
  }
};
</script>

<style lang="scss" scoped>
.con-song-list {
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  .index {
    width: 50px;
    display: inline-block;
    text-align: center;
    span {
      color: #999;
    }
  }
  div.song-name {
    width: calc(100% - 140px);
    p {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;

      height: 40px;
      line-height: 40px;
      font-size: 26px;
      &:last-child {
        height: 30px;
        color: #999;
        font-size: 24px;
        transform: scale(0.75);
        width: 133%;
        margin-left: -92px;
      }
    }
  }
  .icon {
    width: 50px;
    display: inline-block;
    i {
      font-size: 40px;
      font-weight: bold;
    }
  }
  &.active {
    i,
    span,
    p:first-child {
      color: red;
    }
  }
}
</style>
