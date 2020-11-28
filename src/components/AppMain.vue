<template>
  <div class="main">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
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
  padding-bottom: 30px;
}
</style>