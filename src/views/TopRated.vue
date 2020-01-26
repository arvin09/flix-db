<template>
  <div>
    <common :title="title" :apiOptions="apiOptions"></common>
  </div>
</template>
<script>
import common from "./Common.vue";
export default {
  name: "toprated",
  components: {
    common
  },
  data() {
    return {
      title: "Top Rated",
      apiOptions: {
        routes: "movie/top_rated",
        language: "en-US",
        page: 1
      }
    };
  }
};
</script>
