<template>
  <div class="card mb-4" style="max-width: 540px;">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="posterLink" class="card-img" alt />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <div>
            <div class="rating">
              <span class="percent">{{ votePercentage }}</span>
              <svg
                class="bi bi-heart-fill"
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3.314C14.438-1.248 25.534 6.735 10 17-5.534 6.736 5.562-1.248 10 3.314z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="card-title">
              <h5 class="title">{{ details.title }}</h5>
              <h6 class="release-date">{{ formatedReleaseDate }}</h6>
            </div>
          </div>
          <p class="card-synopsis">{{ trimSynopsis }}</p>
          <p class="card-more-info">More Info</p>
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
    votePercentage() {
      return `${this.details.vote_average * 10}%`;
    },
    formatedReleaseDate() {
      let date = new Date(this.details.release_date);
      return date.toDateString().substr(4);
    },
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
  font-size: 14px;
  padding: 1em;
  .card-title {
    padding-top: 10px;
    margin-bottom: 2em;
    .title {
      margin-bottom: 0.2em;
      font-size: 1.1em;
    }
    .release-date {
      font-size: 16px;
      font-weight: 100;
      color: rgba(0, 0, 0, 0.6);
      line-height: 1em;
    }
  }
  .card-more-info {
    border-top: 1px solid #e3e3e3;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding-left: 1.25em;
    padding-top: 0.8em;
  }

  .rating {
    float: left;

    .percent {
      position: absolute;
      left: 30px;
      top: 30px;
      color: white;
      font-weight: bold;
    }

    svg {
      font-size: 60px;
      color: #d80a0a;
    }
  }
}
</style>
