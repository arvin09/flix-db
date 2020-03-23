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
            :menuItem="item"
            :subItems="menu[index].subItems"
          ></nav-item>
        </ul>
      </div>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <nav-item
            v-for="(item, index) in userMenu"
            :key="index"
            :menuItem="item"
          ></nav-item>
        </ul>
      </div>
    </nav>
    <search></search>
  </div>
</template>
<script>
import navItem from "@/components/NavItems.vue";
import search from "@/components/Search.vue";
import config from "@/config/menu.json";
import { mapGetters } from "vuex";
export default {
  components: {
    navItem,
    search
  },
  computed: {
    ...mapGetters({
      user: "user"
    }),
    userMenu() {
      const isLoggedIn = this.user && this.user.loggedIn ? true : false;
      let filteredMenu = [];
      config.userMenu.forEach(menu => {
        if (menu.isLoggedIn === isLoggedIn) {
          filteredMenu.push(menu);
        }
      });
      return filteredMenu;
    }
  },
  data() {
    return {
      menu: config.menu
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

  height: 65px;
}
</style>
