<template>
  <div class="container">
    <div class="layout">
      <h2 class="title">
        Велика побутова техніка
      </h2>
      <div class="wrapper">
        <carousel-hit class="hit" />
        <carousel-goods class="recomm" />
      </div>
    </div>
  </div>
</template>

<script>
import CarouselGoods from '@/components/carousel/CarouselGoods';
import CarouselHit from '@/components/carousel/CarouselHit';

export default {
  name: "CarouselContainer",
  components: {
    CarouselGoods,
    CarouselHit
  },
  props: {},
  data() {
    return {
      
    };
  },

};
</script>

<style lang="scss" scoped>
.container {
  .title {
    font-size: 18px;
    font-weight: 500;
    margin: 30px 0 20px 0;

    @include respond-to('small') {
      font-size: 24px;
    }

    @include respond-to('medium') {
      font-size: 35px;
    }
  }
  
  .wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: stretch;
    max-height: 450px;


    @include respond-to('small') {
      flex-direction: row;
      justify-content: start;
    }
  }

  .recomm {
    width: 100%;

    @include respond-to('small') {
      width: calc(50% - 15px);
    }

    @include respond-to('medium') {
      width: calc(67% - 15px);
    }
  }

  .hit {
    width: 100%;
    margin-bottom: 30px;

    @include respond-to('small') {
      width: calc(50% - 15px);
      margin-right: 30px;
      margin-bottom: 0;
    }

    @include respond-to('medium') {
      width: calc(33% - 15px);
    }
  }
}
</style>