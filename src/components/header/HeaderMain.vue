<template>
  <div class="header-main">
    <router-link to="/" class="logo">LOGO</router-link>
    <form class="search" action="#">
      <input
        type="text"
        name="search"
        class="search__input"
        placeholder="Пошук"
      />
      <div class="categories">
        <p class="categories__item">Категорія товару</p>
        <icon-base view-box="1 0 8 4" width="10" height="5" icon-color="#2a2c30">
          <icon-arrow />
        </icon-base>
      </div>
      <button class="search__button" type="submit">
        <icon-base width="20" height="20">
          <icon-search />
        </icon-base>
      </button>
    </form>
    <header-main-auth />
    <a href="#" class="wishlist">
      <div class="counter">
        <p class="counter__number">1</p>
      </div>
      <icon-base view-box="0 0 32 30" width="32" height="29" icon-color="#2a2c30">
        <icon-wish />
      </icon-base>
    </a>
    <a @mouseenter="isPrice = true" @mouseleave="isPrice = false" href="#" class="cart">
      <transition name="fade">
        <div v-if="isPrice" class="price">
          <p class="price__number">{{ price }} грн</p>
        </div>
      </transition>
      <div class="counter">
        <p class="counter__number">{{ counter }}</p>
      </div>
      <icon-base width="26" height="35" icon-color="#2a2c30">
        <icon-cart />
      </icon-base>
    </a>
  </div>
</template>

<script>
import HeaderMainAuth from "@/components/header/HeaderMainAuth";
import IconBase from "@/components/icons/IconBase";
import IconSearch from "@/components/icons/IconSearch";
import IconCart from "@/components/icons/IconCart";
import IconWish from '@/components/icons/IconWish';
import IconArrow from '@/components/icons/IconArrow';

export default {
  components: {
    HeaderMainAuth,
    IconBase,
    IconSearch,
    IconCart,
    IconWish,
    IconArrow,
  },
  name: "HeaderMain",
  props: {
    
  },
  data() {
    return {
      counter: 12,
      price: 152,
      isPrice: false
    };
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.header-main {
  display: flex;
  justify-content: space-between;
  padding: 22px 0 32px 0;
  align-items: center;

  .logo {
    font-size: 36px;
    color: $orange;
    text-transform: uppercase;
    text-decoration: none;
    margin-right: 80px;
  }
  .search {
    display: flex;
    width: 100%;
    margin-right: 27px;
  }
  .search__input {
    width: 100%;
    padding: 18px 22px;
    border: 1px solid rgba(#2a2c30, 0.2);
    color: rgba(#2a2c30, 0.5);
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
  }
  .categories {
    display: flex;
    align-items: center;
    border: 1px solid rgba(#2a2c30, 0.2);
    border-left: none;
    border-right: none;
    padding: 18px;
  }
  .categories__item {
    white-space: nowrap;
    margin-right: 18px;
  }
  .search__button {
    border: none;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    padding-left: 18px;
    padding-right: 20px;
    font-size: 24px;
    color: #fff;
    background: $orange;
  }
  .wishlist,
  .cart {
    margin-left: 20px;
    display: flex;
    text-decoration: none;
    position: relative;
  }
  .wishlist__icon {
    width: 32px;
    height: 29px;
  }
  .cart {
    margin-right: 15px;
  }
  .price {
    position: absolute;
    font-weight: 100;
    background: $blue;
    color: #fff;
    transform: translateX(-50%);
    left: 50%;
    top: 45px;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(#000, 0.25);
    white-space: nowrap;
    padding: 5px;
    display: block;
  }
  .counter {
    background: $orange;
    min-width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    padding-left: 5px;
    padding-right: 5px;
    position: absolute;
    top: -13px;
    right: -13px;
    box-shadow: 0px 4px 4px rgba(#000, 0.25);
  }
  .counter__number {
    margin-bottom: -2px;
    line-height: 14px;
    color: #fff;
    font-size: 14px;
  }
}
</style>