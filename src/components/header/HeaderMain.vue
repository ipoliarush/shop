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
        <font-awesome-icon
          :icon="['fas', 'angle-down']"
          class="categories__icon"
        />
      </div>
      <button class="search__button" type="submit">
        <icon-base width="20" height="20">
          <icon-search />
        </icon-base>
      </button>
    </form>
    <header-main-auth />
    <a href="#" class="wishlist">
      <icon-base view-box="0 0 32 32" width="32" height="29" icon-color="#2a2c30">
        <icon-wish />
      </icon-base>
    </a>
    <a href="#" class="cart">
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

export default {
  components: {
    HeaderMainAuth,
    IconBase,
    IconSearch,
    IconCart,
    IconWish,
  },
  name: "HeaderMain",
  props: {},
  data() {
    return {};
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
    &__input {
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
      &__item {
        white-space: nowrap;
        margin-right: 18px;
      }
    }
    &__button {
      border: none;
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;
      padding-left: 18px;
      padding-right: 20px;
      font-size: 24px;
      color: #fff;
      background: $orange;
    }
  }
  .wishlist {
    margin-left: 20px;
    display: flex;

    &__icon {
      width: 32px;
      height: 29px;
    }
  }
  .cart {
    margin-left: 20px;
    margin-right: 15px;
    display: flex;
  }
}
</style>