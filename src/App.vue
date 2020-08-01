<template>
  <div id="app" class="container-fluid">
    <header>
      <Navigation></Navigation>
    </header>
    <router-view />
    <footer id="sticky-footer" class="py-4 bg-dark text-white-50">
      <div class="container text-center">
        <small>Copyright &copy; Your Website</small>
      </div>
    </footer>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
export default {
  components: {
    Navigation
  }
};
</script>

<style lang="scss">
header {
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
}
#app {
  padding: 0;
  height: 100%;
}

.container.page-section {
  margin-top: 110px;
}
</style>
