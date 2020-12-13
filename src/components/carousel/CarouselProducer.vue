<template>
  <div class="producer">
    <div class="layout">
      <h2 class="producer__title">
        Виробники
      </h2>
      <slick :slidesToShow="slides" v-bind="settings" class="my-slick">
        <div v-for="item in img" class="producer__item" :key="item.alt">
          <div class="producer__inner">
            <img class="producer__img" :src="require(`@/assets/image/slide/producer/${item.src}`)" :alt="item.alt">
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
  name: "CarouselProducer",
  components: {
    Slick,
  },
  props: {},
  data() {
    return {
      link: '@/assets/image/slide/producer/',
      img: [
        { src: "bosch.png", alt: "Bosch" },
        { src: "eletrolux.png", alt: "Electrolux" },
        { src: "hitachi.png", alt: "Hitahi" },
        { src: "lg.png", alt: "LG" },
        { src: "samsung.png", alt: "Samsung" },
        { src: "toshiba.png", alt: "Toshiba" },
      ],
      settings: {
        "dots": true,
        "dotsClass": 'my-dots',
        "arrows": false,
        "focusOnSelect": true,
        "infinite": true,
        "speed": 500,
        "slidesToScroll": 2,
      }
    };
  },
  computed: {
    slides() {
      return this.$store.state.slidesProducer
    }
  }
};
</script>

<style lang="scss" scoped>
.producer {
  .producer__title {
    font-size: 18px;
    font-weight: 500;

    @include respond-to('small') {
      font-size: 24px;
    }

    @include respond-to('medium') {
      font-size: 35px;
    }
  }
  .producer__item {
    height: 120px;
    position: relative;
    padding: 0 15px;
    outline: none;
  }
  .producer__inner {
    border-radius: 10px;
    width: 100%;
    height: 120px;
    transition: box-shadow ease .7s;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    padding: 15px;

    &:hover {
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    }
  }
  .producer__img {
    display: block;
    outline: none;
    width: 100%;
    height: 100%;
    object-fit: contain;
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

  .my-dots {
    display: flex !important;
    justify-content: center;

    & li {
      margin: 0 6px;
      position: relative;
    }

    & button {
      font-size: 0;
      line-height: 0;
      display: block;
      padding: 5px;
      color: transparent;
      border: 0;
      outline: none;
      background: transparent;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 10px;
        height: 10px;
        background: rgba($blue, 0.2);
        transition: all ease .5s;
        border-radius: 2px;
        cursor: pointer;
      }

      &:hover {
        &::before {
          background: $orange;
        }
      }
    }

    .slick-active button {
      &::before {
        background: $orange;
      }
    }
  }
}
</style>