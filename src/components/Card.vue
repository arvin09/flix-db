<template>
  <div class="card mb-3" style="max-width: 540px;">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="posterLink" class="card-img" alt="" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ details.title }}</h5>
          <p class="card-text">{{ trimSynopsis }}</p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "card",
  props: {
    details: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      baseImageUrl: "https://image.tmdb.org/t/p/w500",
      synopsisLength: 250
    };
  },
  computed: {
    trimSynopsis() {
      let overview = this.details.overview;
      if (overview.length > this.synopsisLength) {
        overview = `${overview.substr(0, this.synopsisLength)} ...`;
      }
      return overview;
    },
    posterLink() {
      return `${this.baseImageUrl}${this.details.poster_path}`;
    }
  }
};
</script>
<style lang="scss" scoped>
.card {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
}
.card-body {
  padding: 0.5rem;
  font-size: 14px;
}
</style>
