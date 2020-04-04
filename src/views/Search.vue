<template>
  <div class="search">
    <div class="sticky">
      <div class="ignore-height">
        <ConTopBar :is-back="true" color="#666" background="#fff" icon="renshu">
          <template v-slot:center>
            <div class="center">
              <input
                @keyup.13="search"
                type="text"
                v-model="searchText"
                :placeholder="realkeyword"
              />
              <i
                class="iconfont icon-guanbixiao"
                v-show="searchText"
                @click="searchText = ''"
              ></i>
            </div>
          </template>
        </ConTopBar>
      </div>
    </div>

    <Tabs
      v-if="show"
      color="#666"
      @change="change"
      :sticky="true"
      :offset-top="50"
      :swipeable="true"
      line-height="3px"
      :border="true"
      :offset="0"
    >
      <Tab
        color="#000"
        v-for="(item, index) in types"
        :title="index"
        :name="item[0]"
        :key="index"
        :title-style="{ 'font-size': '12px' }"
      >
        <List v-model="loading" @load="load">
          <div class="lists-wrap">
            <div class="songs-container" v-if="type === 1">
              <ConSongList
                v-for="(song, index) in data"
                @selectSong="selectSong"
                :key="index"
                :song="song"
                :songName="song.name"
                :artistsName="song.artists[0].name"
                :albumName="song.album.name"
              />
            </div>
            <div class="playLists-container" v-if="type === 1000">
              <div
                class="list"
                v-for="(list, index) in data"
                :key="index"
                @click="$router.push(`/play-list/${list.id}`)"
              >
                <img :src="list.coverImgUrl" alt="" />
                <div class="list-info">
                  <p>{{ list.name }}</p>
                  <p>
                    {{ list.trackCount }}首 by {{ list.creator.nickname }},
                    播放{{ list.playCount }}次
                  </p>
                </div>
              </div>
            </div>
            <div class="singers-container" v-if="type === 100">
              <div class="singer" v-for="(list, index) in data" :key="index">
                <div
                  class="singer-img"
                  @click="$router.push(`/singer/${list.id}`)"
                >
                  <img
                    :onerror="$store.state.defaultimg"
                    :src="list.picUrl ? list.picUrl : ''"
                    alt=""
                  />
                </div>
                <p>{{ list.name }}</p>
              </div>
            </div>
          </div>
        </List>
      </Tab>
    </Tabs>
  </div>
</template>

<script>
import ConTopBar from "../components/ConTopBar";
import ConSongList from "../components/ConSongList";
import { mapActions } from "vuex";
import { Tab, Tabs, List } from "vant";

export default {
  name: "Search",
  data() {
    return {
      searchText: null,
      realkeyword: null,
      types: {
        单曲: [1, "songs"],
        歌单: [1000, "playlists"],
        歌手: [100, "artists"]
      },
      show: false,
      data: [],
      loading: false,
      offset: 0,
      type: 1,
      typeStr: "songs"
    };
  },
  created() {
    this.$api.searchRequest.getSearchDefault().then(res => {
      this.realkeyword = res.data.showKeyword;
    });
  },
  methods: {
    search() {
      this.show = true;
      this.loading = true;
      this.$api.searchRequest
        .search(this.searchText, this.type, 30, this.offset)
        .then(res => {
          let data = res.result[this.typeStr];
          this.data = [...this.data, ...data];
          this.loading = false;
        });
    },
    change(title, name) {
      this.offset = 0;
      this.type = title;
      this.typeStr = this.types[name][1];
      this.data = [];
      this.search();
    },
    load() {
      this.offset++;
      this.search();
    },

    selectSong(song) {
      this.$api.playerRequest.getSongUrl(song.id).then(res => {
        let currentSong = res.data[0];
        this.$api.playerRequest.getSongDetail(song.id).then(res => {
          this.setCurrentSong({
            currentIndex: 0,
            currentSong: currentSong,
            currentSongDetail: res.songs[0]
          });
          this.$store.state.currentPlayList.unshift(res.songs[0]);
          this.setCurrentPlayList({
            currentPlayList: this.$store.state.currentPlayList
          });
        });
      });
    },
    ...mapActions({
      setCurrentSong: "setCurrentSong",
      setCurrentPlayList: "setCurrentPlayList"
    })
  },
  components: {
    ConTopBar,
    ConSongList,
    Tab,
    Tabs,
    List
  }
};
</script>

<style lang="scss" scoped>
.search {
  .ignore-height {
    height: 50px;
    background: #fff;
  }
  .sticky {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
  }
  .con-top-bar {
    .center {
      position: relative;
      width: calc(100% - 140px);
      margin: 0 30px;

      input {
        width: 100%;
        height: 80px;
        padding-top: 10px;
        border: none;
        outline: none;
        border-bottom: 1px solid #ddd;
        &::placeholder {
          color: #ccc;
        }
      }
      i {
        position: absolute;
        font-size: 24px;
        top: -4px;
        right: 0;
      }
    }
  }
  .lists-wrap {
    padding: 0 30px;
    .playLists-container {
      padding: 10px 0;
      .list {
        height: 100px;
        padding: 10px 0;
        display: flex;
        img {
          width: 100px;
          border-radius: 10px;
          margin-right: 10px;
        }
        .list-info {
          width: calc(100% - 120px);
          p {
            width: 100%;
            font-size: 26px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

            &:last-child {
              font-size: 24px;
              transform: scale(0.75);
              width: 132%;
              margin-left: -92px;
              padding-top: 16px;
              color: #aaa;
              word-spacing: 2px;
            }
          }
        }
      }
    }
    .singers-container {
      padding: 10px 0;
      .singer {
        display: flex;
        align-items: center;
        height: 120px;
        .singer-img {
          display: inline-block;
          height: 80px;
          width: 80px;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
          img {
            width: 110px;
            position: absolute;
            left: -22%;
            top: -10%;
          }
        }

        p {
          width: calc(100% - 110px);
          font-size: 28px;
          margin-left: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
