<template>
  <div class="home container">
    <h5>Popular Movies</h5>
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
import appConfig from "../../config.json";
import card from "@/components/Card.vue";
export default {
  name: "home",
  components: {
    card
  },
  data() {
    return {
      baseurl: "https://api.themoviedb.org/3/movie/popular/",
      params: {
        api_key: appConfig.apiKey,
        language: "en-US",
        page: 1
      },
      response: {},
      results: {}
    };
  },
  computed: {
    apiUrl() {
      return `${this.baseurl}?api_key=${this.params.api_key}&language=${this.params.language}&page=${this.params.page}`;
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
<style lang="scss" scoped></style>
