<template>
  <div class="home">
    <banner-main  />
    <carousel-producer class="producer" />
    <carousel-container
      :dataH="ITEMSHIT"
      :dataG="ITEMSHIT"
      title="Велика побутова техніка"
    />
    <carousel-container 
      :dataH="ITEMSHIT" 
      :dataG="ITEMSHIT" 
      :rev="true" 
      title="Техніка для кухні" 
    />
    <carousel-container 
      :dataH="ITEMSHIT" 
      :dataG="ITEMSHIT" 
      title="Вбудованна техніка" 
    />
    <carousel-container 
      :dataH="ITEMSHIT" 
      :dataG="ITEMSHIT" 
      :rev="true" 
      title="Знижки" 
    />
  </div>
</template>

<script>
import BannerMain from "@/components/banner/BannerMain";
import CarouselProducer from "@/components/carousel/CarouselProducer";
import CarouselContainer from '@/components/carousel/CarouselContainer';
import {mapActions, mapGetters} from 'vuex'

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
  computed: {
    ...mapGetters([
      'ITEMSHIT'
    ]),
  },
  methods: {
    ...mapActions([
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