<template>
  <div id="footer-copy" class="copy">
    <p class="text">&copy; 2020 Logo.ua. Усі права захищенні</p>
  </div>
</template>

<script>
export default {
  components: {},
  name: "FooterCopy",
  props: {},
  data: () => ({}),
  computed: {},
};
</script>

<style lang="scss" scoped>
.copy {
  text-align: center;
  background: $strong-vlue;
  color: rgba(#fff, 0.5);
  font-weight: 300;
  padding: 20px 0;
}
</style>
