<template>
  <div class="goods">
    <div class="goods__wrap">
      <slick 
        v-if="data.data"
        :rows="RGOODS"
        :slidesToShow="SGOODS"
        v-bind="settings"
        class="goods__slick slick-slider"
      >
        <div
          v-for="item in data.data"
          :key="item.article"
          class="item"
        >
          <router-link
            :title="item.name"
            to="/i"
            class="item__wrap"
          >
            <div class="item__inner">
              <img
                class="item__img" 
                :src="require(`@/assets/image/goods/${item.image}`)"
                :alt="item.name"
              >
              <img
                class="item__img img-hover" 
                :src="require(`@/assets/image/goods/${item.image2}`)"
                :alt="item.name"
              >
            </div>
            <div class="item__detail">
              <div class="item__name">
                {{ item.name }}
              </div>
              <div class="item__price price">
                <div v-if="item.discount" class="price__old">
                  {{ Math.round(item.price) }}
                  <span class="price__ua"> &#8372;</span>
                </div>
                <div v-if="!item.discount" class="price__now">
                  {{ Math.round(item.price) }}
                  <span class="price__ua"> &#8372;</span>
                </div>
                <div v-if="item.discount" class="price__new" >
                  {{ Math.round(item.price - (item.price * item.discount / 100) ) }}
                  <span class="price__ua"> &#8372;</span>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </slick>
    </div>
  </div>
</template>

<script>
import Slick from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import { mapGetters } from 'vuex'

export default {
  name: "CarouselGoods",
  components: {
    Slick,
  },
  methods: {},
  data() {
    return {
      settings: {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToScroll: 2,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 5000,
        draggable: false
      }
    };
  },
  props: {
    data: [Object, Array],
  },
  computed: {
    ...mapGetters('slider', [
      'SGOODS',
      'RGOODS'
    ]),
  },
};
</script>

<style lang="scss" scoped>
.goods {

  .goods__wrap {
    border-radius: 10px;
  }
  .goods__slick {
    position: initial;
    margin: 0 -15px;
  }

  .item {
    padding: 15px;
    outline: none;
    height: 100%;
  }
  .item__wrap {
    background: #FFF;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    padding: 15px;
    text-decoration: none;
    transition: box-shadow ease .9s;

    &:hover {
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);

      .price__now {
        color: $orange;
      }
      .item__img {
        display: none;
      }
      .img-hover {
        display: block;
      }
    }
  }
  .item__inner {
    width: 100%;
    outline: none;
    height: 70px;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;

    @include respond-to('small') {
      height: 100px;
    }
  }

  .item__img {
    display: block;
    outline: none;
    width: auto;
    height: auto;
    max-height: 100%;
    max-width: 100%;
  }
  .img-hover {
    display: none;
  }
  .item__name {
    font-size: 14px;
    font-weight: 300;
    text-align: center;
    margin-top: 12px;
    outline: none;
    color: $blue;
    line-height: 16px;
    height: 32px;
    overflow: hidden;

    visibility: hidden;
    position: absolute;

    @include respond-to('small') {
      visibility: visible;
      position: initial;
    }
  }
  .item__price {
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    margin-top: 12px;
    color: $blue;
    height: 39px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    @include respond-to('small') {
      margin-top: 6px;
      flex-direction: row;
      height: 21px;
      justify-content: center;
      line-height: 10px;
    }
  }
  .price__old {
    font-size: 12px;
    font-weight: 300;
    text-decoration: line-through;

    @include respond-to('small') {
      margin-right: 5px;
    }
  }
  .price__now {
    transition: color ease .5s;
  }
  .price__new {
    color: $orange;
  }
  .price__ua {
    font-size: 1em;
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
    top: 2px;

    @include respond-to('small') {
      top: 5px;
    }

    @include respond-to('medium') {
      top: 14px;
    }

    &::before {
      content: "";
      position: absolute;
      width: 25px;
      height: 25px;
      top: 0;
      transition: background ease .5s;
      background-color: rgba($orange, 0.7);
      background-image: url('~@/assets/image/icons/arrow.svg');
      background-repeat: no-repeat;
      background-position: center;
      border-radius: 4px;
      cursor: pointer;
    }

    &:hover {
      &::before {
        background-color: $orange;
      }
    }
  }
  .slick-prev {
    right: 80px;
  }

  .slick-next {
    right: 50px;

    &::before {
      transform: scale(-1, 1);
    }
  }
}
</style>