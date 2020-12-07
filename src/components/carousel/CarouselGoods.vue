<template>
  <div class="goods">
    <div class="layout">
      <h2 class="goods__title">
        Велика побутова техніка
      </h2>
      <slick :slidesToShow="slides" v-bind="settings" class="my-slick">
        <div v-for="item in img" class="goods__item" :key="item.alt">
          <div class="goods__inner">
            <img class="goods__img" :alt="item.alt">
          </div>
        </div>
      </slick>
    </div>
  </div>
</template>

<script>
import Slick from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'


export default {
  name: "CarouselGoods",
  components: {
    Slick,
  },
  props: {},
  data() {
    return {
      img: [
        { src: "bosch.png", alt: "Bosch" },
        { src: "eletrolux.png", alt: "Electrolux" },
        { src: "hitachi.png", alt: "Hitahi" },
        { src: "lg.png", alt: "LG" },
        { src: "samsung.png", alt: "Samsung" },
        { src: "toshiba.png", alt: "Toshiba" },
      ],
      settings: {
        "dots": false,
        "arrows": true,
        "focusOnSelect": true,
        "infinite": true,
        "speed": 500,
        "slidesToScroll": 2,
      }
    };
  },
  computed: {
    slides() {
      return this.$store.state.slidesGoods
    }
  }
};
</script>

<style lang="scss" scoped>
.goods {
  .goods__title {
    font-size: 18px;
    font-weight: 500;

    @include respond-to('small') {
      font-size: 24px;
    }

    @include respond-to('medium') {
      font-size: 35px;
    }
  }
  .goods__item {
    height: 120px;
    position: relative;
    padding: 0 15px;
    outline: none;
  }
  .goods__inner {
    background: #fff;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    transition: box-shadow ease .7s;
    outline: none;
    width: 100%;

    &:hover {
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    }
  }
  .goods__img {
    display: block;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    position: absolute;
    padding: 30px;
    outline: none;
  }
}
</style>

<style lang="scss">
.my-slick {
  .slick-list {
    margin: 0 -15px;
    box-sizing: initial;
    padding: 15px 0px;
  }
}
</style>