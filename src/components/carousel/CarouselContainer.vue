<template>
  <div class="container">
    <div class="layout">
      <div class="head">
        <h2 class="title">
          {{ title }}
        </h2>
        <div class="wline"></div>
        <router-link class="link" to="/catalog">
          До каталогу
        </router-link>
      </div>
      <div class="wrapper" :class="{'wrapper-rev': rev}">
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
  props: {
    title: String,
    rev: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      
    };
  },

};
</script>

<style lang="scss" scoped>
.container {

  .head {
    margin: 30px 0 20px 0;
    display: flex;
    align-items: center;
  }
  .title {
    font-size: 18px;
    font-weight: 500;
    flex-shrink: 0;
    margin-right: 50px;

    @include respond-to('small') {
      font-size: 24px;
    }

    @include respond-to('medium') {
      font-size: 35px;
    }
  }

  .wline {
    @include respond-to('medium') {
      width: 100%;
      border-bottom: 2px solid rgba($blue, 0.1);
      flex-shrink: 2;
      margin-right: 50px;
    }
  }
  
  .link {
    color: rgba($blue, 0.5);
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
    transition: all ease .5s;
    flex-shrink: 0;

    visibility: hidden;
    position: absolute;

    @include respond-to('medium') {
      visibility: visible;
      position: initial;
    }

    &:hover {
      color: $blue;
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