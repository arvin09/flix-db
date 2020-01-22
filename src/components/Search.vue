<template>
  <div id="search">
    <form class="form-inline my-2 my-lg-0">
      <div class="bar">
        <svg
          class="bi bi-search"
          width="1em"
          height="1em"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M12.442 12.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z"
            clip-rule="evenodd"
          />
          <path
            fill-rule="evenodd"
            d="M8.5 14a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM15 8.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
            clip-rule="evenodd"
          />
        </svg>
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
