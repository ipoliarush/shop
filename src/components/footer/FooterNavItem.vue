<template>
  <ul id="footer-nav-item" class="list">
    <li v-for="(nav, index) in navs" :key="index" class="list__tem">
      <router-link :to="nav.url" class="list__link">
        {{ nav.name }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  components: {},
  name: "FooterNavItem",
  props: {
    navs: Array,
  },
  data: () => ({}),
  computed: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
.list__link {
  color: rgba(#fff, 0.5);
  font-weight: 300;
  font-size: 14px;
  text-decoration: none;
  margin-bottom: 5px;
  display: block;
  width: max-content;
  transition: $ease05;
  &:hover {
    color: $orange;
  }

  @include respond-to('medium') {
    margin-bottom: 15px;
  }
}
</style>
