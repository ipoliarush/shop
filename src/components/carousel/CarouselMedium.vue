<template>
  <div class="medium">
    <div class="layout">
      <div class="head">
        <router-link class="link" to="/catalog">
          {{ title }}
        </router-link>
      </div>
      <div class="wrapper">
        <carousel-sale :data="data" class="sale" />
        <banner-medium class="banner" />
      </div>
    </div>
  </div>
</template>

<script>
import CarouselSale from '@/components/carousel/CarouselSale';
import BannerMedium from '@/components/banner/BannerMedium';

export default {
  name: "CarouselMedium",
  components: {
    CarouselSale,
    BannerMedium
  },
  props: {
    title: String,
    rev: {
      type: Boolean,
      default: false
    },
    data: [Object, Array],
  },
  data() {
    return {
      
    };
  },

};
</script>

<style lang="scss" scoped>
.medium {
  position: relative;
  margin-top: 10px;

  .head {
    display: flex;
    align-items: center;
  }
  .link {
    color: $blue;
    font-size: 20px;
    font-weight: 500;
    flex-shrink: 0;
    margin-right: 50px;
    text-decoration: none;
    transition: color ease .5s;

    @include respond-to('small') {
      font-size: 24px;
    }

    @include respond-to('medium') {
      font-size: 35px;
    }

    &:hover {
      color: $orange;
    }
  }
  
  .wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: stretch;

    @include respond-to('small') {
      flex-direction: row-reverse;
      justify-content: start;
    }
  }

  .sale {
    width: 100%;

    @include respond-to('small') {
      width: calc(50% - 15px);
    }
  }

  .banner {
    margin-top: 15px;

    @include respond-to('small') {
      width: calc(50% - 15px);
      margin-right: 30px;
    }
  }
}
</style>