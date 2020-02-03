<template>
  <div class="container page-section">
    <div class="title">
      <h5>{{ title }}</h5>
    </div>
    <div
      class="row"
      v-for="(movieList, groupIndex) in groupedMovies"
      :key="groupIndex"
    >
      <div v-for="movie in movieList" :key="movie.id" :class="cardInRow">
        <card :details="movie" :isPeople="isPeople"></card>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import card from "@/components/Card.vue";
export default {
  name: "cards",
  components: {
    card
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    route: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      baseurl: "https://api.themoviedb.org/3",
      api_key: process.env.VUE_APP_API_KEY,
      language: "en-US",
      page: 1,
      response: {},
      results: {},
      isPeople: false
    };
  },
  computed: {
    groupedMovies() {
      let movies = [];
      if (this.results.length) {
        let movieRow = [];
        this.results.forEach((value, index) => {
          movieRow.push(value);
          if ((index + 1) % this.colCount == 0) {
            movies.push(movieRow);
            movieRow = [];
          }
        });
      }
      return movies;
    },
    colCount() {
      return this.isPeople ? 4 : 2;
    },
    cardInRow() {
      return this.isPeople ? "col-sm-3" : "col-sm-6";
    }
  },
  mounted() {
    this.getData({ route: this.route });
  },
  methods: {
    setNewRoute(route) {
      this.getData({ route: route });
    },
    setPage(page) {
      this.getData({ page });
    },

    setLanguage(language) {
      this.getData({ language });
    },

    apiUrl(params) {
      return `${this.baseurl}${params.route}?api_key=${this.api_key}&language=${this.language}&page=${this.page}`;
    },
    getData(route) {
      this.isPeople = route.route.indexOf("person") > -1 ? true : false;
      fetch(this.apiUrl(route))
        .then(response => {
          return response.json();
        })
        .then(movieJson => {
          this.response = movieJson;
          this.results = movieJson.results;
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.title {
  padding: 15px 0;
}
</style>
