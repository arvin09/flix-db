<template>
  <div id="search">
    <form class="form-inline my-2 my-lg-0">
      <div class="bar">
        <img src="../assets/search.svg" />
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search for movie, tv show, person "
          aria-label="Search"
        />
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "search",
  components: {}
};
</script>
<style lang="scss" scoped>
#search {
  input {
    width: 80%;
    border-radius: 0;
    border: 0;
    font-style: italic;
    outline: none;
    box-shadow: none;
  }

  .bar {
    width: 80%;
    margin: auto;
  }

  border-top: 1px solid #c6c6c6;
  border-bottom: 1px solid #c6c6c6;
  background-color: white;
}
</style>
