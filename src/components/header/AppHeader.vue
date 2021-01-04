<template>
  <header class="app-header">
    <div class="header-one">
      <div class="layout">
        <header-top />
        <header-bottom />
      </div>
    </div>
    
    <div class="header-two">
      <div class="layout">
        <header-main />
        <div class="wrap">
          <header-catalog class="header-catalog" />
          <header-nav class="header-nav" />
        </div>
      </div> 
    </div>
  </header>
</template>

<script>
import HeaderTop from "@/components/header/HeaderTop";
import HeaderBottom from "@/components/header/HeaderBottom";
import HeaderMain from "@/components/header/HeaderMain";
import HeaderCatalog from "@/components/header/HeaderCatalog";
import HeaderNav from "@/components/header/HeaderNav";

export default {
  components: {
    HeaderTop,
    HeaderBottom,
    HeaderMain,
    HeaderCatalog,
    HeaderNav,
  },
  name: "AppHeader",
  props: {},
  data() {
    return {
    };
  },
  computed: {
  },
  mounted() {
  },
  created() {
  },
  updated() {
  },
};
</script>

<style lang="scss" scoped>
.app-header {
  .header-one {
    background: $blue;
  }
  .header-two {
    background: #fff;
    display: none;

    @include respond-to('medium') {
      display: block;
    }
  }
  
  .wrap {
    display: flex;
    justify-content: flex-start;
  }

  .header-catalog {
    width: 326px;
    flex-shrink: 0;
    margin-right: 30px;
  }

  .header-nav {
    width: 100%
  }
}
</style>