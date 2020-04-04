<template>
  <div class="con-top-bar" :style="{ color: color, background: background }">
    <i class="left iconfont icon-back1" @click="backMethod"></i>
    <slot name="center">
      <p class="title-sub" v-if="titleSub">
        <span>{{ title }}</span>
        <span>{{ titleSub }}</span>
      </p>
      <p class="title" v-else>
        <span>{{ title }}</span>
      </p>
    </slot>
    <i v-if="icon" :class="'right iconfont icon-' + icon"></i>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  props: {
    title: String,
    titleSub: String,
    icon: String,
    isBack: Boolean,
    color: String,
    background: String
  },
  methods: {
    backMethod() {
      this.isBack ? this.$router.go(-1) : this.$emit("backMethod");
    }
  }
};
</script>

<style lang="scss" scoped>
.con-top-bar {
  display: flex;
  justify-content: baseline;
  height: 100px;
  color: #fff;
  padding: 0 40px;
  i {
    line-height: 100px;
    font-size: 40px;
    font-weight: bold;
  }
  p {
    display: flex;
    width: calc(100% - 120px);
    height: 100px;
    justify-content: space-evenly;
    margin: 0 20px;
    flex-direction: column;
    span {
      display: inline-block;
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    &.title-sub {
      span {
        height: 60px;
        padding-top: 20px;
      }
      span:last-child {
        padding-top: 0;
        padding-bottom: 10px;
        font-size: 24px;
        line-height: 40px;
        color: hsla(0, 0%, 100%, 0.6);
      }
    }
  }
}
</style>
