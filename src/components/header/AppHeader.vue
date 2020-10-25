<template>
  <header class="app-header">
    <div class="layout">
      <header-top />
      <header-bottom />
    </div>
    

    <!-- <div class="main">
      <div class="container">
        <header-main />
        <div class="row">
          <header-catalog class="col-3" />
          <header-nav class="col-9" />
        </div>
      </div>
    </div> -->
  </header>
</template>

<script>
import HeaderTop from "@/components/header/HeaderTop";
import HeaderBottom from "@/components/header/HeaderBottom";
// import HeaderMain from "@/components/header/HeaderMain";
// import HeaderCatalog from "@/components/header/HeaderCatalog";
// import HeaderNav from "@/components/header/HeaderNav";

export default {
  components: {
    HeaderTop,
    HeaderBottom,
    // HeaderMain,
    // HeaderCatalog,
    // HeaderNav,
  },
  name: "AppHeader",
  props: {},
  data() {
    return {};
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.app-header {
  background: $blue;

  .main {
    background: #fff;
  }
}
</style>