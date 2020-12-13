<template>
  <div class="goods">
    <div class="goods__wrap">
      <div class="goods__head">
        <icon-base class="svg" viewBox="0 0 28 28" width="20" height="20" fill="#FF6A00">
          <icon-like />
        </icon-base>
        <h3 class="goods__title">
          Рекомендовані
        </h3>
        <div class="goods__wline"></div>
      </div>
      <slick :rows="row" :slidesToShow="slides" v-bind="settings" class="goods__slick">
        <div v-for="item in items" :key="item.n" class="goods__item">
          <div class="goods__inner">
            <img  class="goods__img" src="@/assets/image/slide/goods/goods.png">
          </div>
          <div class="goods__desc">
            Блендер "Blue"
          </div>
          <div class="goods__price">
            220 грн
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
import IconLike from "@/components/icons/IconLike";


export default {
  name: "CarouselGoods",
  components: {
    Slick,
    IconBase,
    IconLike,
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
        slidesToScroll: 2,
        arrows: true,
      }
    };
  },
  computed: {
    slides() {
      return this.$store.state.slidesGoods;
    },
    row() {
      return this.$store.state.slidesGoodsRow;
    }
  }
};
</script>

<style lang="scss" scoped>
.goods {

  .goods__wrap {
    background: #fff;
    position: relative;
    border-radius: 10px;
    padding-bottom: 20px;
  }
  .goods__head {
    display: flex;
    padding: 15px 15px 0 15px;
    align-items: center;

    .svg {
      flex-shrink: 0;
    }
  }

  .goods__wline {
    @include respond-to('medium') {
      width: 100%;
      border-bottom: 2px solid rgba($blue, 0.1);
      flex-shrink: 2;
      margin-right: 45px;
    }
  }
  .goods__title {
    font-size: 16px;
    font-weight: 400;
    margin-left: 10px;
    flex-shrink: 0;

    @include respond-to('small') {
      font-size: 20px;
    }

    @include respond-to('medium') {
      font-size: 25px;
      margin-right: 15px;
    }
  }

  .goods__item {
    height: 70px;
    position: relative;
    padding: 0 15px;
    outline: none;

    @include respond-to('small') {
      height: 100px;
    }
  }
  .goods__inner {
    background: #F5F5F5;
    border-radius: 10px;
    width: 100%;
    transition: box-shadow ease .7s;
    outline: none;
    padding: 5px 10px;
    height: 70px;
    position: relative;
    overflow: hidden;
    margin-top: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    @include respond-to('small') {
      height: 100px;
    }
  }

  .goods__img {
    display: block;
    outline: none;
    height: 100%;
    width: auto;
  }
  .goods__desc {
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
    }
  }
  .goods__price {
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    margin-top: 12px;

    @include respond-to('small') {
      margin-top: 6px;
    }
  }
}
</style>

<style lang="scss">
.goods__slick {

  .slick-arrow {
    font-size: 0;
    line-height: 0;
    display: block;
    color: transparent;
    border: 0;
    outline: none;
    background: transparent;
    position: absolute;
    top: -28px;

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