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
    ...mapActions(
      'slider', [
        'RESIZE',
      ],
      'auth', [
        'LOGOUT',
    ]),
  },
  created() {
    window.addEventListener("resize", this.RESIZE)
    this.RESIZE()

    //Обработка просроченных токенов 
    this.$http.interceptors.response.use(undefined, function (err) {
      return new Promise(function (resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.LOGOUT()
        }
        throw err
      })
    })
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
