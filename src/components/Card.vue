<template>
  <div>
    <div
      v-if="isPeople"
      class="card"
      style="width: 16rem; margin-bottom: 20px;"
    >
      <img v-if="posterLink" :src="posterLink" class="card-img-top" alt="" />
      <div
        v-else
        class="no-image-holder people-no-image"
        style="line-height:381.5px"
      >
        <img src="../assets/no-image.svg" />
      </div>
      <div class="card-body people-body">
        <h5 class="card-title people-title">{{ details.name }}</h5>
      </div>
    </div>
    <div v-else class="card mb-4" style="max-width: 540px;">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img
            v-if="posterLink"
            :src="posterLink"
            class="card-img"
            alt="no Image"
          />
          <div v-else class="no-image-holder">
            <img src="../assets/no-image.svg" />
          </div>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <div>
              <div class="rating">
                <span class="percent">{{ votePercentage }}</span>
                <img src="../assets/heart.svg" />
              </div>
              <div class="card-title">
                <h5 class="title">{{ details.title || details.name }}</h5>
                <h6 class="release-date">{{ formatedReleaseDate }}</h6>
              </div>
            </div>
            <p class="card-synopsis">{{ trimSynopsis }}</p>
            <p class="card-more-info">More Info</p>
          </div>
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
    },
    isPeople: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      baseImageUrl: "https://image.tmdb.org/t/p/w500",
      defaultSynopsis:
        "There is no synopsis present at the moment we wil update it soon...",
      synopsisLength: 250
    };
  },
  computed: {
    votePercentage() {
      return `${this.details.vote_average * 10}%`;
    },
    formatedReleaseDate() {
      const date = new Date(
        this.details.release_date || this.details.first_air_date
      );
      return date.toDateString().substr(4);
    },
    trimSynopsis() {
      let overview = this.details.overview || this.defaultSynopsis;
      if (overview.length > this.synopsisLength) {
        overview = `${overview.substr(0, this.synopsisLength)} ...`;
      }
      return overview;
    },
    posterLink() {
      if (this.details.poster_path) {
        return `${this.baseImageUrl}${this.details.poster_path}`;
      }
      if (this.details.profile_path) {
        return `${this.baseImageUrl}${this.details.profile_path}`;
      }
      return null;
    }
  }
};
</script>
<style lang="scss" scoped>
.people-title {
  margin-bottom: 0 !important;
}
.card {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}
.no-image-holder {
  display: inline-block;
  text-align: center;
  background-color: #dbdbdb;
  color: #b5b5b5;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #d7d7d7;
  width: 100%;
  height: 100%;
  line-height: 269px;

  img {
    height: 75px;
    widows: 75px;
  }
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
  }
}
</style>
