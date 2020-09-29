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
        <div class="s-header__navigation">
          <s-header-catalog />
          <s-header-navigation />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import sHeaderInfopanel from "@/components/header/s-header-infopanel";
import sHeaderMain from "@/components/header/s-header-main";
import sHeaderCatalog from "@/components/header/s-header-catalog";
import sHeaderNavigation from "@/components/header/s-header-navigation";

export default {
  components: {
    sHeaderInfopanel,
    sHeaderMain,
    sHeaderCatalog,
    sHeaderNavigation,
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
  &__navigation {
    display: flex;
    justify-content: start;
  }
}
</style>