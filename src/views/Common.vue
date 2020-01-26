<template>
  <div class="container">
    <div class="title">
      <h5>{{ title }}</h5>
    </div>
    <div
      class="row"
      v-for="(movieList, groupIndex) in groupedMovies"
      :key="groupIndex"
    >
      <div
        v-for="(movie, movieIndex) in movieList"
        :key="movieIndex"
        class="col-sm-6"
      >
        <card :details="movie"></card>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import card from "@/components/Card.vue";
export default {
  name: "common",
  components: {
    card
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    apiOptions: {
      type: Object,
      default: () => ({}) // routes, lang, page
    }
  },
  data() {
    return {
      baseurl: "https://api.themoviedb.org/3/",
      api_key: process.env.VUE_APP_API_KEY,
      response: {},
      results: {}
    };
  },
  computed: {
    apiUrl() {
      return `${this.baseurl}${this.apiOptions.routes}?api_key=${this.api_key}&language=${this.apiOptions.language}&page=${this.apiOptions.page}`;
    },
    groupedMovies() {
      let movies = [];
      if (this.results.length) {
        let movieRow = [];
        this.results.forEach((value, index) => {
          movieRow.push(value);
          if ((index + 1) % 2 == 0) {
            movies.push(movieRow);
            movieRow = [];
          }
        });
      }
      return movies;
    }
  },
  mounted() {
    fetch(this.apiUrl)
      .then(response => {
        return response.json();
      })
      .then(movieJson => {
        console.log(movieJson);
        this.response = movieJson;
        this.results = movieJson.results;
      });
  }
};
</script>
<style lang="scss" scoped>
.title {
  padding: 15px 0;
}
</style>
