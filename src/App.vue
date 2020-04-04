<template>
  <div id="app">
    <div
      v-show="!this.$store.state.playerFullScreen"
      class="top"
      :style="{ 'margin-bottom': mt60 }"
    >
      <router-view />
    </div>
    <ConPlayer />
  </div>
</template>

<script>
import ConPlayer from "./components/ConPlayer";
export default {
  name: "app",
  computed: {
    mt60() {
      return this.$store.state.currentIndex ? "60px" : 0;
    }
  },
  components: {
    ConPlayer
  }
};
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  font-family: system-ui, -apple-system, BlinkMacSystemFont, segoe ui, Roboto,
    Helvetica, Arial, sans-serif, apple color emoji, segoe ui emoji,
    segoe ui symbol;

  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0 !important;
  }

  .top {
    display: inline-block;
    width: 100%;
  }

  *::-webkit-scrollbar {
    width: 0 !important;
  }
  * {
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
  }
}
</style>
