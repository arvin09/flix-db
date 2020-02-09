<template>
  <div class="container page-section">
    <div class="title" v-if="results.length">
      <h5>{{ title }}</h5>
      <pagination
        ref="topPaginator"
        @page-changed="handlePageChange($event, 'top')"
        :totalPages="totalPages"
      ></pagination>
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
    <div class="bottom-pagination" v-if="results.length">
      <pagination
        ref="bottomPaginator"
        @page-changed="handlePageChange($event, bottom)"
        :totalPages="totalPages"
      ></pagination>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import card from "@/components/Card.vue";
import pagination from "@/components/Pagination.vue";
export default {
  name: "cards",
  components: {
    card,
    pagination
  },
  props: {
    title: {
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
      isPeople: false,
      totalPages: 0,
      currentRoute: ""
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
    handlePageChange(page, instance) {
      if (instance === "top") {
        this.$refs.bottomPaginator.setCurrentPage(page);
      } else {
        this.$refs.topPaginator.setCurrentPage(page);
      }
      this.setPage(page);
    },
    setNewRoute(route) {
      this.currentRoute = route;
      this.page = 1;
      this.getData({ route: route });
    },
    setPage(page) {
      this.page = page;
      this.getData({ page: page });
    },

    setLanguage(language) {
      this.getData({ language });
    },

    apiUrl(params) {
      return `${this.baseurl}${params.route || this.currentRoute}?api_key=${
        this.api_key
      }&language=${this.language}&page=${params.page || this.page}`;
    },
    getData(route) {
      console.log(this.$route.params.category);
      this.isPeople = this.currentRoute.indexOf("person") > -1 ? true : false;
      fetch(this.apiUrl(route))
        .then(response => {
          return response.json();
        })
        .then(movieJson => {
          this.response = movieJson;
          this.totalPages = this.response.total_pages;
          this.results = movieJson.results;
          this.$refs.bottomPaginator.setCurrentPage(this.page);
          this.$refs.topPaginator.setCurrentPage(this.page);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.pagination {
  z-index: 0;
}
.title {
  padding-top: 10px;
  padding-bottom: 0;
  display: flex;
  justify-content: space-between;
}

.bottom-pagination {
  text-align: right;
  .pagination {
    display: inline-block;
  }
}
</style>
