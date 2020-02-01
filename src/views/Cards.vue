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
      <div v-for="movie in movieList" :key="movie.id" class="col-sm-6">
        <card :details="movie"></card>
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
      results: {}
    };
  },
  computed: {
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
