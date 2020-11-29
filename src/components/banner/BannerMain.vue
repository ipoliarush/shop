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
    flex-direction: column;

    @include respond-to('small') {
      flex-direction: row;
    }
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
    display: flex;
  }

  .banner-big {
    height: auto;
    width: 100%;
  }

  .mini {
    width: 100%;
    margin-top: 30px;
    flex-shrink: 0;
    display: flex;
    height: auto;

    @include respond-to('small') {
      margin-left: 30px;
      margin-top: 0;
      flex-direction: column;
      width: 152px;
    }

    @include respond-to('medium') {
      width: 220px;
    }
  }

  .banner-mini {
    width: 100%;
    height: auto;
    flex-grow: 1;

    &:first-child {
      margin-right: 30px;

      @include respond-to('small') {
        margin-bottom: 30px;
        margin-right: 0;
      }
    }
  }
  
}
</style>