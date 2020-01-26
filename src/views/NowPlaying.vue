<template>
  <div>
    <common :title="title" :apiOptions="apiOptions"></common>
  </div>
</template>
<script>
import common from "./Common.vue";
export default {
  name: "nowplaying",
  components: {
    common
  },
  data() {
    return {
      title: "Now Playing",
      apiOptions: {
        routes: "movie/now_playing",
        language: "en-US",
        page: 1
      }
    };
  }
};
</script>
