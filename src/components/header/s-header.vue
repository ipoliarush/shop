<template>
  <header class="s-header">
    <div class="s-header__wrap s-header__wrap--infopanel">
      <div class="container">
        <s-header-infopanel />
      </div>
    </div>
    <div class="s-header__wrap s-header__wrap--main">
      <div class="container">
        <s-header-main />
      </div>
    </div>
  </header>
</template>

<script>
import sHeaderInfopanel from "@/components/header/s-header-infopanel";
import sHeaderMain from "@/components/header/s-header-main";

export default {
  components: {
    sHeaderInfopanel,
    sHeaderMain,
  },
  name: "s-header",
  props: {},
  data() {
    return {};
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.s-header {
  &__wrap {
    &--infopanel {
      background: $blue;
    }
    &--main {
      background: #fff;
    }
  }
}
</style>