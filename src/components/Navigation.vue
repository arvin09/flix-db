<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        <img alt="Flix DB logo" src="../assets/logo.png" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <nav-item
            v-for="(item, index) in menu"
            :key="index"
            :menuItem="menu[index].name"
            :subItems="menu[index].subItems"
          >
          </nav-item>
        </ul>
      </div>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <nav-item
            v-for="(item, index) in userMenu"
            :key="index"
            :menuItem="userMenu[index].name"
          >
          </nav-item>
        </ul>
      </div>
    </nav>
    <search></search>
  </div>
</template>
<script>
import navItem from "@/components/NavItems.vue";
import search from "@/components/Search.vue";
export default {
  components: {
    navItem,
    search
  },
  data() {
    return {
      menu: [
        {
          name: "Movie",
          subItems: ["Popular", "Top_Rated", "Up Coming", "Now_Playing"]
        },
        {
          name: "Tv",
          subItems: ["Popular", "Top_Rated", "On_the_Air", "Airing_Today"]
        },
        {
          name: "Person",
          subItems: ["Popular"]
        }
      ],
      userMenu: [
        {
          name: "Login"
        },
        {
          name: "Sign up"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
nav {
  .navbar-brand {
    img {
      width: 60%;
    }
    text-align: left;
  }

  height: 110px;
}
</style>
