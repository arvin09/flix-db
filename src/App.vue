<template>
  <div id="app" class="container-fluid">
    <header>
      <Navigation></Navigation>
    </header>
    <router-view />
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
  position: sticky;
  top: 0;
  z-index: 1;
}
#app {
  padding: 0;
  height: 100%;
}
</style>
