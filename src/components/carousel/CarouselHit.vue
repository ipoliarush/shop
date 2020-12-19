<template>
  <div class="hit">
    <div class="hit__wrap">
      <div class="hit__head">
        <icon-base class="svg" viewBox="0 0 26 26" width="24" height="24" fill="#FF6A00">
          <icon-star />
        </icon-base>
        <h3 class="hit__title">
          {{ data.name_ua }}
        </h3>
        <div class="hit__wline"></div>
      </div>
      <slick
        v-if="data.data"
        :slidesToScroll="LHIT"
        :slidesToShow="SHIT"
        v-bind="settings"
        class="hit__slick"
      >
        <div v-for="item in data.data" :key="item.article" class="item">
          <router-link :title="item.name" to="/i" class="item__wrap">
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
import IconStar from "@/components/icons/IconStar";
import {mapGetters} from 'vuex'

export default {
  name: "CarouselHit",
  components: {
    Slick,
    IconBase,
    IconStar,
  },
    props: {
    data: [Object, Array],
  },
  data() {
    return {
      settings: {
        dots: false,
        infinite: true,
        speed: 2000,
        arrows: true,
        draggable: false,
        autoplay: false,
        autoplaySpeed: 5000,
      }
    };
  },
  computed: {
    ...mapGetters([
      'SHIT',
      'LHIT',
    ]),
  },
};
</script>

<style lang="scss" scoped>
.hit {

  .hit__wrap {
    position: relative;
    height: 100%;
  }
  .hit__head {
    display: flex;
    padding-top: 15px;
    align-items: center;
    
    .svg {
      flex-shrink: 0;
    }
  }

  .hit__title {
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
  .hit__wline {
    @include respond-to('medium') {
      width: 100%;
      border-bottom: 2px solid rgba($blue, 0.1);
      flex-shrink: 2;
      margin-right: 45px;
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
    max-height: fill-available;
    position: relative;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;

    @include respond-to('small') {
      height: 100%;
      min-height: 347px;
    }

    @include respond-to('medium') {
      height: 100%;
      min-height: 297px;
    }
  }

  .item__img {
    display: block;
    outline: none;
    width: auto;
    height: auto;
    max-height: 100%;
    max-width: 100%;

    @include respond-to('small') {
      max-height: 347px;
    }

    @include respond-to('medium') {
      max-height: 297px;
    }
  }
  .img-hover {
    display: none;
  }
  .item__detail {
    @include respond-to('small') {
      margin-top: 6px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    @include respond-to('medium') {
      margin-top: 15px;
      flex-direction: column;

      .item__price {
        font-size: 36px;
      }
      .item__name, 
      .item__price {
        width: 100%;
      }
    }
  }
  .item__name {
    font-size: 14px;
    font-weight: 300;
    text-align: center;
    margin-top: 12px;
    outline: none;
    color: $blue;
    line-height: 18px;
    height: 36px;
    overflow: hidden;

    visibility: hidden;
    position: absolute;

    @include respond-to('small') {
      visibility: visible;
      position: initial;
      font-size: 16px;
      margin-top: 0;
      width: 45%;
      margin-right: 5%;
    }

    @include respond-to('medium') {
      font-size: 18px;
    }
  }
  .item__price {
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    margin-top: 12px;
    height: 39px;
    color: $blue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    @include respond-to('small') {
      margin-top: 0;
      font-size: 27px;
      width: 50%;
      height: 49px;
      justify-content: center;
    }

    @include respond-to('medium') {
      font-size: 40px;
      white-space: nowrap;
      flex-direction: row;
      height: 44px;
      margin-top: 10px;
      align-items: flex-end;
    }
  }
  .price__old {
    font-size: 12px;
    font-weight: 300;
    text-decoration: line-through;

    @include respond-to('small') {
      margin-right: 5px;
    }

    @include respond-to('medium') {
      font-size: 16px;
      margin-bottom: 5px;
    }
  }
  .price__now {
    transition: color ease .5s;

    @include respond-to('small') {
      line-height: 44px;
    }
  }
  .price__new {
    color: $orange;

    @include respond-to('small') {
      line-height: 27px;
    }

    @include respond-to('medium') {
      line-height: 44px;
    }
  }
}
</style>

<style lang="scss">
.hit__slick {
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