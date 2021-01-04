<template>
  <div class="producer">
    <div class="layout">
      <h2 class="producer__title">
        {{ITEMSPRODUCER.name_ua}}
      </h2>
      <slick
        v-if="ITEMSPRODUCER.data"
        :slidesToShow="SPRODUCER"
        v-bind="settings"
        class="my-slick"
      >
        <div 
          v-for="item in ITEMSPRODUCER.data"
          class="producer__item"
          :key="item.name"
        >
          <router-link
            :title="item.name"
            :to="`/${item.name.toLowerCase()}`"
            class="producer__inner"
          >
            <img
              :alt="item.name"
              class="producer__img"
              :src="require(`@/assets/image/slide/producer/${item.image}`)"
            >
          </router-link>
        </div>
      </slick>
    </div>
  </div>
</template>

<script>
import Slick from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "CarouselProducer",
  components: {
    Slick,
  },
  props: {},
  data() {
    return {
      settings: {
        dots: true,
        dotsClass: 'my-dots',
        arrows: false,
        infinite: true,
        speed: 2200,
        slidesToScroll: 2,
        autoplay: false,
        autoplaySpeed: 6000,
        draggable: false
      }
    };
  },
  computed: {
    ...mapGetters('slider', [
      'SPRODUCER',
      'ITEMSPRODUCER',
    ]),
  },
  methods: {
    ...mapActions('slider', [
      'GET_ITEMSPRODUCER_FROM_API',
    ]),
  },
  mounted() {
    this.GET_ITEMSPRODUCER_FROM_API();
  },
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
    width: auto;
    height: auto;
    max-height: 100%;
    max-width: 100%;
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