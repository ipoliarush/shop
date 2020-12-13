<template>
  <div class="home">
    <banner-main  />
    <carousel-producer class="producer" />
    <carousel-container title="Велика побутова техніка" />
    <carousel-container :rev="true" title="Техніка для кухні" />
    <carousel-container title="Вбудованна техніка" />
    <carousel-container :rev="true" title="Знижки" />
  </div>
</template>

<script>
import BannerMain from "@/components/banner/BannerMain";
import CarouselProducer from "@/components/carousel/CarouselProducer";
import CarouselContainer from '@/components/carousel/CarouselContainer';

export default {
  name: "Home",
  components: {
    BannerMain,
    CarouselProducer,
    CarouselContainer
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
  .producer {
    margin-top: 30px;
  }
}
</style>