<template>
  <div class="banner-main">
    <div class="layout">
      <div class="wrap">
        <div :class="{model: isOpen}" class="no-model"></div>
        <div class="big">
          <banner-big class="banner-big" />
        </div>
        <div class="mini">
          <banner-mini class="banner-mini" />
          <banner-mini class="banner-mini" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BannerBig from "@/components/banner/BannerBig";
import BannerMini from "@/components/banner/BannerMini";

export default {
  name: "BannerMain",
  components: {
    BannerBig,
    BannerMini,
  },
  props: {},
  data() {
    return {};
  },
  mounted() {
  },
  computed: {
    isOpen() {
      return this.$store.state.isOpen
    }
  },
  
};
</script>

<style lang="scss" scoped>
.banner-main {
  padding-top: 12px;

  .wrap {
    display: flex;
  }
  .no-model {
    width: 0;
    transition: all ease .7s;
  }
  .model {
    margin-right: 30px;
    width: 326px;
    flex-shrink: 0;
  }
  .big {
    width: 100%;
    transition: all ease .3s;
    height: auto;
  }

  .banner-big {
    height: auto;
  }

  .mini {
    width: 220px;
    margin-left: 30px;
    flex-shrink: 0;
  }

  .banner-mini {
    &:first-child {
      margin-bottom: 30px;
    }
  }
  
}
</style>