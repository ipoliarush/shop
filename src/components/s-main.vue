<template>
  <div class="s-main">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "s-main",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
};
</script>

<style lang="scss">
.s-main {
  background: #f5f5f5;
  width: 100%;
  height: 100vh;
}
</style>