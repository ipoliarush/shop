<template>
  <div class="big">
    <div class="layout">
      <div class="head">
        <router-link class="link" to="/catalog">
          {{ title }}
        </router-link>
      </div>
      <div class="wrapper" :class="{'wrapper-rev': rev}">
        <carousel-hit :data="dataH" class="hit" />
        <carousel-goods :data="dataG" class="recomm" />
      </div>
    </div>
  </div>
</template>

<script>
import CarouselGoods from '@/components/carousel/CarouselGoods';
import CarouselHit from '@/components/carousel/CarouselHit';

export default {
  name: "CarouselBig",
  components: {
    CarouselGoods,
    CarouselHit
  },
  props: {
    title: String,
    rev: {
      type: Boolean,
      default: false
    },
    dataG: [Object, Array],
    dataH: [Object, Array],
  },
  data() {
    return {
      
    };
  },

};
</script>

<style lang="scss" scoped>
.big {
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
    display: none;

    @include respond-to('small') {
      width: calc(50% - 15px);
      margin-right: 30px;
      display: block;
    }

    @include respond-to('medium') {
      width: calc(33% - 15px);
    }
  }

  .wrapper-rev {
    flex-direction: column-reverse;

    @include respond-to('small') {
      flex-direction: row-reverse;
    }
    .recomm {

      @include respond-to('small') {
        margin-right: 30px;
      }
    }
    .hit {

      @include respond-to('small') {
        margin-right: 0;
      }
    }
  }
}
</style>