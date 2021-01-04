<template>
  <div id="app">
    <app-header />
    <app-main />
    <app-footer /> 
  </div>
</template>

<script>
import AppHeader from "./components/header/AppHeader";
import AppMain from "./components/AppMain";
import AppFooter from "./components/footer/AppFooter";
import { mapActions } from 'vuex'

export default {
  name: "App",
  components: {
    AppMain,
    AppHeader,
    AppFooter,
  },
  methods: {
    ...mapActions('slider', [
      'RESIZE',
    ])
  },
  created() {
    window.addEventListener("resize", this.RESIZE);
    this.RESIZE();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.RESIZE);
  },
  mounted() {
    this.$nextTick(function () {
      window.addEventListener('resize', this.RESIZE);
      this.RESIZE();
    })
  },
};
</script>

<style lang="scss">
#app {
}
</style>
