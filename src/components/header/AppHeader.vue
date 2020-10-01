<template>
  <header class="s-header">
    <div class="s-header__wrap s-header__wrap--infopanel">
      <div class="container">
        <header-infopanel />
      </div>
    </div>
    <div class="s-header__wrap s-header__wrap--main">
      <div class="container">
        <header-main />
        <div class="s-header__navigation">
          <header-catalog />
          <header-navigation />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import HeaderInfopanel from "@/components/header/HeaderInfopanel";
import HeaderMain from "@/components/header/HeaderMain";
import HeaderCatalog from "@/components/header/HeaderCatalog";
import HeaderNavigation from "@/components/header/HeaderNavigation";

export default {
  components: {
    HeaderInfopanel,
    HeaderMain,
    HeaderCatalog,
    HeaderNavigation,
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