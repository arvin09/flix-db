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
</style>
