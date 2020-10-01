<template>
  <div id="app">
    <app-header />
    <app-main />
  </div>
</template>

<script>
import AppMain from "./components/AppMain";
import AppHeader from "./components/header/AppHeader";

export default {
  name: "App",
  components: {
    AppMain,
    AppHeader,
  },
};
</script>

<style lang="scss">
#app {
}
</style>
