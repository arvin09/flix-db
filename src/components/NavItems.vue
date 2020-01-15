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
      >{{ item }}</a
    >
    <div class="dropdown-menu" aria-labelledby="moiveDropdown">
      <!-- <template v-for="subItem in subItems" :key="$index">
        <a class="dropdown-item" href="#">{{subItem}}</a>
        <div class="dropdown-divider"></div>
      </template> -->
    </div>
  </li>
</template>
<script>
export default {
  name: "nav-item",
  props: {
    item: {
      type: String,
      default: ""
    },
    subItems: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  }
};
</script>
