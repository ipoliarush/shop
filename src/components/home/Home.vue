<template>
  <div class="home">
    <banner-main  />
    <carousel-producer class="producer" />
    <carousel-big
      :dataH="ITEMSHIT"
      :dataG="ITEMSHIT"
      title="Велика побутова техніка"
    />
    <carousel-big 
      :dataH="ITEMSHIT" 
      :dataG="ITEMSHIT" 
      :rev="true" 
      title="Техніка для кухні" 
    />
    <carousel-big 
      :dataH="ITEMSHIT" 
      :dataG="ITEMSHIT" 
      title="Вбудованна техніка" 
    />
    <carousel-big 
      :dataH="ITEMSHIT" 
      :dataG="ITEMSHIT" 
      :rev="true" 
      title="Знижки" 
    />
    <carousel-medium 
      :data="ITEMSHIT" 
      title="Знижки"
    />
  </div>
</template>

<script>
import BannerMain from "@/components/banner/BannerMain";
import CarouselProducer from "@/components/carousel/CarouselProducer";
import CarouselBig from '@/components/carousel/CarouselBig';
import CarouselMedium from '@/components/carousel/CarouselMedium';
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "Home",
  components: {
    BannerMain,
    CarouselProducer,
    CarouselBig,
    CarouselMedium
  },
  props: {},
  data() {
    return {
      
    };
  },
  computed: {
    ...mapGetters('slider', [
      'ITEMSHIT'
    ]),
  },
  methods: {
    ...mapActions('slider', [
      'GET_ITEMSHIT_FROM_API',
    ])
  },
  mounted() {
    this.GET_ITEMSHIT_FROM_API();
  }
};
</script>

<style lang="scss" scoped>
.home {
  .producer {
    margin-top: 30px;
  }
}
</style>