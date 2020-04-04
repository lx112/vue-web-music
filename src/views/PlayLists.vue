<template>
  <div class="play-lists">
    <Sticky>
      <div class="ignore-height">
        <ConTopBar
          :is-back="true"
          title="歌单广场"
          color="#666"
          background="#fff"
        />
      </div>
    </Sticky>

    <Tabs
      color="#666"
      @change="playListsChange"
      :sticky="true"
      offset-top="50"
      :swipeable="true"
      line-height="3px"
      :border="true"
    >
      <Tab
        color="#000"
        v-for="(item, index) in categories"
        :title="item.name"
        :name="item.name"
        :key="index"
        :title-style="{ 'font-size': '12px' }"
      >
        <List
          v-model="loading"
          @load="playListsChange(cat, false)"
          :finished="finished"
        >
          <div class="play-lists-wrap">
            <div class="lists-container">
              <ConSquareModule
                v-for="(item, index) in playLists"
                :key="index"
                :data="item"
                img="coverImgUrl"
              />
            </div>
          </div>
        </List>
      </Tab>
    </Tabs>
  </div>
</template>

<script>
import ConTopBar from "../components/ConTopBar";
import ConSquareModule from "../components/ConSquareModule";
import { Tab, Tabs, Sticky, List } from "vant";

export default {
  name: "PlayLists",
  data() {
    return {
      categories: null,
      cat: null,
      playLists: null,
      limit: 0,
      loading: false,
      finished: false
    };
  },
  created() {
    this.$api.playListRequest.getPlayListHotCatList().then(res => {
      this.categories = res.tags;
      this.cat = this.categories[0].name;
    });
  },
  methods: {
    playListsChange(name, tab = true) {
      this.loading = true;
      if (tab) {
        this.limit = 30;
        this.cat = name;
        this.finished = false;
      } else {
        if (this.limit >= 90) return (this.finished = true);
        this.limit += 30;
      }
      this.$api.playListRequest
        .getTopPlayList(this.cat, this.limit)
        .then(res => {
          this.playLists = res.playlists;
          this.loading = false;
        });
    }
  },
  components: {
    ConTopBar,
    Tab,
    Tabs,
    ConSquareModule,
    Sticky,
    List
  }
};
</script>

<style lang="scss" scoped>
.ignore-height {
  height: 50px;
  background: #fff;
}
.play-lists-wrap {
  overflow: hidden;
  padding: 0 10px;
  .lists-container {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100%;
    .square-module {
      margin-top: 20px;
    }
  }
}
</style>
