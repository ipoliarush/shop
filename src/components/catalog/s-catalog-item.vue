<template>
  <div class="s-catalog-item"></div>
</template>

<script>
export default {
  name: "s-catalog-item",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {},
};
</script>

<style lang="scss">
.s-catalog-item {
}
</style>