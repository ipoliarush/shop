<template>
  <header class="app-header">
    <div class="infopanel">
      <div class="container">
        <header-infopanel />
      </div>
    </div>
    <div class="main">
      <div class="container">
        <header-main />
        <div class="row">
          <header-catalog class="col-3" />
          <header-nav class="col-9" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import HeaderInfopanel from "@/components/header/HeaderInfopanel";
import HeaderMain from "@/components/header/HeaderMain";
import HeaderCatalog from "@/components/header/HeaderCatalog";
import HeaderNav from "@/components/header/HeaderNav";

export default {
  components: {
    HeaderInfopanel,
    HeaderMain,
    HeaderCatalog,
    HeaderNav,
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
  .infopanel {
    background: $blue;
  }
  .main {
    background: #fff;
  }
}
</style>