<template>
  <div>
    <common :title="title" :apiOptions="apiOptions"></common>
  </div>
</template>
<script>
import common from "./Common.vue";
export default {
  name: "upcoming",
  components: {
    common
  },
  data() {
    return {
      title: "Up Coming",
      apiOptions: {
        routes: "movie/upcoming",
        language: "en-US",
        page: 1
      }
    };
  }
};
</script>
