<template>
  <div class="medium">
    <div class="layout">
      <div class="head">
      </div>
      <div class="wrapper">
        <carousel-sale :data="data" class="sale" />
        <carousel-sale :data="data" class="sale" />
      </div>
    </div>
  </div>
</template>

<script>
import CarouselSale from '@/components/carousel/CarouselSale';

export default {
  name: "CarouselMedium",
  components: {
    CarouselSale
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

  .head {
    margin-top: 10px;
    display: flex;
    align-items: center;
  }
  .title {
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
    transition: color ease .5s;
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

    @include respond-to('small') {
      width: calc(50% - 15px);
      margin-right: 30px;
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