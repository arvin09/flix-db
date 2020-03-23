<template>
  <li class="nav-item dropdown">
    <a
      class="nav-link dropdown-toggle"
      :class="menuItem.name"
      href="#"
      id="moiveDropdown"
      role="button"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <span v-if="hasSubtems" @click="isSignOut ? signOutClick() : null"
        >{{ getMenuName }}
      </span>
      <router-link v-else :to="mainMenu" class="nav-link">
        {{ getMenuName }}
      </router-link>
    </a>
    <div class="dropdown-menu" aria-labelledby="moiveDropdown">
      <router-link
        v-for="(subItem, index) in subItems"
        :key="index"
        class="dropdown-item"
        href="#"
        :to="getRouterLink(subItem)"
      >
        {{ getSubMenuItem(subItem) }}
      </router-link>
    </div>
  </li>
</template>
<script>
import labels from "@/config/labels.json";
import { mapGetters } from "vuex";
import firebase from "firebase";

export default {
  name: "nav-item",
  props: {
    menuItem: {
      type: Object,
      default: () => ({})
    },
    subItems: {
      type: Array,
      default: () => []
    },
    route: {
      type: String,
      default: ""
    }
  },
  computed: {
    ...mapGetters({
      user: "user"
    }),
    isSignOut() {
      return this.menuItem.name === "signOut";
    },
    hasSubtems() {
      return this.subItems.length || this.menuItem.isLoggedIn;
    },
    mainMenu() {
      return `/${this.menuItem.name.toLowerCase()}`;
    },
    getMenuName() {
      const name =
        this.menuItem.name !== "user"
          ? labels["en"][this.menuItem.name]
          : this.user && this.user.data && this.user.data.displayName
          ? this.user.data.displayName
          : "";
      return name.toUpperCase();
    }
  },
  methods: {
    signOutClick() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({ name: "login" });
          // TODO: debug for this work around
          window.location.reload();
        });
    },
    getSubMenuItem(item) {
      return labels["en"][item];
    },
    getRouterLink(item) {
      return `/${this.menuItem.name.toLowerCase()}/${item
        .toLowerCase()
        .replace(/ +?/g, "")}`;
    }
  }
};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .dropdown:hover .dropdown-menu,
  .btn-group:hover .dropdown-menu {
    display: block;
  }
  .dropdown-menu {
    margin-top: 0;
  }
  .dropdown-toggle {
    margin-bottom: 2px;
  }
  .navbar .dropdown-toggle,
  .nav-tabs .dropdown-toggle {
    margin-bottom: 0;
  }
}

.dropdown-menu {
  width: 500px;
  background: transparent;
  padding: 0;
  line-height: 1;
  border: 0;
  a {
    display: inline-block;
  }
  .dropdown-item {
    width: auto;
    color: #ffffff;
    font-weight: bold;
    font-size: 14px;
    padding-top: 0;
    padding-bottom: 0;
  }

  .dropdown-item:hover {
    background-color: transparent;
    color: #ff0000;
  }
}

.nav-item {
  > a {
    padding-top: 0;
    padding-bottom: 0;
    padding-right: 40px !important;
    font-weight: bold;
  }

  .dropdown-menu {
    width: 500px;
    background: transparent;
    border: 0;
    a {
      display: inline-block;
    }
    .dropdown-item {
      width: auto;
      color: #ffffff;
      font-weight: bold;
      font-size: 14px;
      padding-top: 0;
      padding-bottom: 0;
    }

    .dropdown-item:hover {
      background-color: transparent;
      color: #ff0000;
    }
  }
}

.dropdown-toggle::after {
  display: none;
}
</style>
