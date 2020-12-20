<template>
  <div class="hit">
    <div class="hit__wrap">
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
                  {{ Math.round(item.price) }} &#8372;
                </div>
                <div v-if="!item.discount" class="price__now">
                  {{ Math.round(item.price) }} &#8372;
                </div>
                <div v-if="item.discount" class="price__new" >
                  {{ Math.round(item.price - (item.price * item.discount / 100) ) }} &#8372;
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
// import IconBase from "@/components/icons/IconBase";
// import IconStar from "@/components/icons/IconStar";
import {mapGetters} from 'vuex'

export default {
  name: "CarouselHit",
  components: {
    Slick,
    // IconBase,
    // IconStar,
  },
    props: {
    data: [Object, Array],
  },
  data() {
    return {
      settings: {
        dots: true,
        dotsClass: 'my-dots',
        infinite: true,
        speed: 2000,
        arrows: false,
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
      min-height: 320px;
    }

    @include respond-to('medium') {
      height: 100%;
      min-height: 270px;
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
      max-height: 320px;
    }

    @include respond-to('medium') {
      max-height: 270px;
    }
  }
  .img-hover {
    display: none;
  }
  .item__detail {
    margin-bottom: 27px;

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

  .my-dots {
    display: none;
    position: absolute;
    transform: translate(-50%, -40px);
    left: 50%;
    display: flex !important;
    justify-content: center;

    @include respond-to('small') {
      display: block;
    }

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