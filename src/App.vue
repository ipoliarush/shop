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
import {mapActions} from 'vuex'

export default {
  name: "App",
  components: {
    AppMain,
    AppHeader,
    AppFooter,
  },
  methods: {
    ...mapActions([
      'SETTINGS_RESIZE'
    ])
  },
  mounted() {
    this.$nextTick(function (){
      window.addEventListener('resize', this.SETTINGS_RESIZE());
      this.SETTINGS_RESIZE();
    })
  },
  // beforeDestroy() {
  //   window.removeEventListener('resize', this.SETTINGS_RESIZE());
  // }
};
</script>

<style lang="scss">
#app {
}
</style>
