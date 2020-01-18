<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <h1>Popular Movies</h1>
    {{ response.total_pages }}

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      baseurl: "https://api.themoviedb.org/3/movie/popular/",
      params: {
        api_key: "4c2394362747c9c8be04f8a259496b4b",
        language: "en-US",
        page: 1
      },
      response: {}
    };
  },
  computed: {
    apiUrl() {
      return `${this.baseurl}?api_key=${this.params.api_key}&language=${this.params.language}&page=${this.params.page}`;
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
      });
  }
};
</script>
