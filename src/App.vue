<template>
  <div id="app">
    <app-header />
    <app-main />
    <!-- <app-footer /> -->
  </div>
</template>

<script>
import AppHeader from "./components/header/AppHeader";
import AppMain from "./components/AppMain";
// import AppFooter from "./components/footer/AppFooter";

export default {
  name: "App",
  components: {
    AppMain,
    AppHeader,
    // AppFooter,
  },
};
</script>

<style lang="scss">
#app {
}
</style>
