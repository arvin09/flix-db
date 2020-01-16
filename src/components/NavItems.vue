<template>
  <li class="nav-item dropdown">
    <a
      class="nav-link dropdown-toggle"
      href="#"
      id="moiveDropdown"
      role="button"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
      >{{ getUpperCaseMenuName }}</a
    >
    <div class="dropdown-menu" aria-labelledby="moiveDropdown">
      <a
        v-for="(subItem, index) in subItems"
        :key="index"
        class="dropdown-item"
        href="#"
        >{{ subItem }}</a
      >
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
}
.dropdown-menu a {
  display: inline-block;
}

.nav-item > a {
  padding-top: 0;
  padding-bottom: 0;
  padding-right: 40px !important;
}

.nav-link {
  font-weight: bold;
}

.dropdown-toggle::after {
  display: none;
}

.dropdown-item {
  width: auto;
  color: white;
  font-weight: bold;
  font-size: 14px;
  padding-top: 0;
  padding-bottom: 0;
}

.dropdown-item:hover {
  background-color: transparent;
  color: red;
}
</style>
