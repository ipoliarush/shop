<template>
  <div class="main">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
};
</script>

<style lang="scss">
.main {
  background: #f5f5f5;
  width: 100%;
  height: 100%;
  padding-top: 30px;
  padding-bottom: 50px;
}
</style>