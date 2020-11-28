<template>
  <div id="app">
    <app-header />
    <app-main />
    <banner-big />

    <!-- <app-footer /> -->
  </div>
</template>

<script>
import AppHeader from "./components/header/AppHeader";
import AppMain from "./components/AppMain";
import BannerBig from "./components/banner/BannerBig";
// import AppFooter from "./components/footer/AppFooter";

export default {
  name: "App",
  components: {
    AppMain,
    AppHeader,
    BannerBig,
    // AppFooter,
  },
};
</script>

<style lang="scss">
#app {
}
</style>
