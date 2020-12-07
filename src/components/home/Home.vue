<template>
  <div class="home">
    <banner-main />
    <carousel-producer class="producer" />
    <carousel-goods class="goods" />
  </div>
</template>

<script>
import BannerMain from "@/components/banner/BannerMain";
import CarouselProducer from "@/components/carousel/CarouselProducer";
import CarouselGoods from '@/components/carousel/CarouselGoods';

export default {
  name: "Home",
  components: {
    BannerMain,
    CarouselProducer,
    CarouselGoods
  },
  props: {},
  data() {
    return {
      
    };
  },

};
</script>

<style lang="scss" scoped>
.home {
  .producer,
  .goods {
    margin-top: 30px;
  }
}
</style>