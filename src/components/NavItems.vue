<template>
  <li class="nav-item dropdown">
    <a
      class="nav-link dropdown-toggle"
      href="#"
      id="moiveDropdown"
      role="button"
      aria-haspopup="true"
      aria-expanded="false"
      >{{ getUpperCaseMenuName }}</a
    >
    <div class="dropdown-menu" aria-labelledby="moiveDropdown">
      <router-link
        v-for="(subItem, index) in subItems"
        :key="index"
        class="dropdown-item"
        href="#"
        :to="getRouterLink(subItem)"
      >
        {{ subItem }}
      </router-link>
    </div>
  </li>
</template>
<script>
export default {
  name: "nav-item",
  props: {
    menuItem: {
      type: String,
      default: ""
    },
    subItems: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    getUpperCaseMenuName() {
      return this.menuItem.toString().toUpperCase();
    }
  },
  methods: {
    getRouterLink(item) {
      return item.toLowerCase().replace(/ +?/g, "");
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
