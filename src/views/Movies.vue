<template>
  <div>
    <cards-view :title="title" :route="route" ref="cardsView"></cards-view>
  </div>
</template>
<script>
import cardsView from "./Cards.vue";
import labels from "@/config/labels.json";
// import { upperFirst } from "lodash";

export default {
  name: "movie",
  components: {
    cardsView
  },
  data() {
    return {
      title: "",
      route: "",
      defaultPath: "/movie/popular"
    };
  },
  mounted() {
    const path = this.$route.path != "/" ? this.$route.path : this.defaultPath;
    this.updateCategory(path);

    this.$router.afterEach(to => {
      this.updateCategory(to.path);
    });
  },
  methods: {
    updateCategory(path) {
      this.transformTitle(path);
      this.$refs.cardsView.setNewRoute(path);
    },
    transformTitle(path) {
      const mainRoute = path.split("/")[1];
      const subRoute = path.split("/")[2];
      this.title = `${labels["en"][subRoute]} ${labels["en"][mainRoute]}`;
    }
  }
};
</script>
