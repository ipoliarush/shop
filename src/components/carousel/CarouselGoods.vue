<template>
  <div class="goods">
    <div class="goods__wrap">
      <div class="goods__head">
        <icon-base
          class="svg"
          viewBox="0 0 28 28"
          width="20"
          height="20"
          fill="#FF6A00"
        >
          <icon-like />
        </icon-base>
        <h3 class="goods__title">
          {{ data.name_ua }}
        </h3>
        <div class="goods__wline"></div>
      </div>
      <slick 
        v-if="data.data"
        :rows="RGOODS"
        :slidesToShow="SGOODS"
        v-bind="settings"
        class="goods__slick"
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
            </div>
            <div class="item__detail">
              <div class="item__name">
                {{ item.name }}
              </div>
              <div class="item__price price">
                <div v-if="item.discount" class="price__old">
                  {{ Math.round(item.price) }} грн
                </div>
                <div v-if="!item.discount" class="price__now">
                  {{ Math.round(item.price) }} грн
                </div>
                <div v-if="item.discount" class="price__new" >
                  {{ Math.round(item.price - (item.price * item.discount / 100) ) }} грн
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
import IconBase from "@/components/icons/IconBase";
import IconLike from "@/components/icons/IconLike";
import {mapGetters} from 'vuex'

export default {
  name: "CarouselGoods",
  components: {
    Slick,
    IconBase,
    IconLike,
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
    ...mapGetters([
      'SGOODS',
      'RGOODS'
    ]),
  },
};
</script>

<style lang="scss" scoped>
.goods {

  .goods__wrap {
    position: relative;
  }
  .goods__head {
    display: flex;
    padding-top: 15px;
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
    font-size: 18px;
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

  .item {
    position: relative;
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
    }
  }
  .item__inner {
    width: 100%;
    outline: none;
    height: 70px;
    position: relative;
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
    height: 100%;
    width: auto;
  }
  .item__detail {

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
}
</style>

<style lang="scss">
.goods__slick {
  margin: 0 -15px;
  
  .slick-arrow {
    font-size: 0;
    line-height: 0;
    display: block;
    color: transparent;
    border: 0;
    outline: none;
    background: transparent;
    position: absolute;
    top: -22px;

    @include respond-to('small') {
      top: -25px;
    }

    @include respond-to('medium') {
      top: -28px;
    }

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