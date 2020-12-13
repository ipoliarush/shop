<template>
  <div class="hit">
    <div class="hit__wrap">
      <div class="hit__head">
        <icon-base class="svg" viewBox="0 0 26 26" width="24" height="24" fill="#FF6A00">
          <icon-star />
        </icon-base>
        <h3 class="hit__title">
          Хіти продажу
        </h3>
        <div class="hit__wline"></div>
      </div>
      <slick :slidesToShow="slides" v-bind="settings" class="hit__slick">
        <div v-for="item in items" :key="item.n" class="hit__item">
          <div class="hit__inner">
            <img  class="hit__img" src="@/assets/image/slide/hit/hit.png">
          </div>
          <div class="hit__detail">
            <div class="hit__name">
              Холодильник "Bosch"
            </div>
            <div class="hit__price">
              220 грн
            </div>
          </div>
        </div>
      </slick>
    </div>
  </div>
</template>

<script>
import Slick from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import IconBase from "@/components/icons/IconBase";
import IconStar from "@/components/icons/IconStar";


export default {
  name: "CarouselHit",
  components: {
    Slick,
    IconBase,
    IconStar,
  },
  props: {},
  data() {
    return {
      items: [
        { n: 1 }, 
        { n: 2 },
        { n: 3 },
        { n: 4 },
        { n: 5 },
        { n: 6 },
        { n: 7 },
        { n: 8 },
        { n: 9 },
        { n: 10 },
        { n: 11 },
        { n: 12 },
      ],
      img: [
        { src: "goods.png", alt: "Bosch" },
      ],
      settings: {
        dots: false,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        arrows: true,
      }
    };
  },
  computed: {
    slides() {
      return this.$store.state.slidesHit;
    },
  }
};
</script>

<style lang="scss" scoped>
.hit {

  .hit__wrap {
    background: #fff;
    position: relative;
    border-radius: 10px;
    padding-top: 15px;
    padding-bottom: 20px;
    height: 100%;
  }
  .hit__head {
    display: flex;
    padding: 0 15px 0 15px;
    align-items: center;
    margin-bottom: 20px;
    
    .svg {
      flex-shrink: 0;
    }
  }

  .hit__title {
    font-size: 16px;
    font-weight: 400;
    margin-left: 10px;
    white-space: nowrap;

    @include respond-to('small') {
      font-size: 20px;
    }

    @include respond-to('medium') {
      font-size: 25px;
      margin-right: 15px;
    }
  }
  .hit__wline {
    @include respond-to('medium') {
      width: 100%;
      border-bottom: 2px solid rgba($blue, 0.2);
      flex-shrink: 2;
      margin-right: 45px;
    }
  }

  .hit__item {
    height: 70px;
    position: relative;
    padding: 0 15px;
    outline: none;
    
    @include respond-to('small') {
      height: 100%;
    }
  }
  .hit__inner {
    background: #F5F5F5;
    border-radius: 10px;
    width: 100%;
    transition: box-shadow ease .7s;
    outline: none;
    padding: 5px 10px;
    height: 70px;
    max-height: fill-available;
    position: relative;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;

    @include respond-to('small') {
      height: 100%;
    }

    &:hover {
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    }
  }

  .hit__img {
    display: block;
    outline: none;
    height: 100%;
    width: auto;

    @include respond-to('small') {
      max-height: 280px;
    }

    @include respond-to('medium') {
      max-height: 260px;
    }
  }
  .hit__detail {
    @include respond-to('small') {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .hit__name {
    font-size: 14px;
    font-weight: 300;
    text-align: center;
    margin-top: 12px;
    outline: none;

    visibility: hidden;
    position: absolute;

    @include respond-to('small') {
      visibility: visible;
      position: initial;
      font-size: 16px;
      margin-top: 0;
      
    }

    @include respond-to('medium') {
      font-size: 18px;
    }
  }
  .hit__price {
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    margin-top: 12px;

    @include respond-to('small') {
      margin-top: 0;
      font-size: 27px;
    }

    @include respond-to('medium') {
      font-size: 40px;
      white-space: nowrap;
    }
  }
}
</style>

<style lang="scss">
.hit__slick {

  .slick-arrow {
    font-size: 0;
    line-height: 0;
    display: block;
    color: transparent;
    border: 0;
    outline: none;
    background: transparent;
    position: absolute;
    top: -48px;

    &::before {
      content: "";
      position: absolute;
      width: 20px;
      height: 20px;
      top: 0;
      transition: all ease .5s;
      background: url('~@/assets/image/icons/arrow.svg');
      background-repeat: no-repeat;
      background-position: center;
      opacity: .5;
      cursor: pointer;
    }

    &:hover {
      &::before {
        opacity: 1;
      }
    }
  }
  .slick-prev {
    right: 45px;
  }

  .slick-next {
    right: 25px;

    &::before {
      transform: scale(-1, 1);
    }
  }
}
</style>