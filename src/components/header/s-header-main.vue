<template>
  <div class="header-main">
    <a href="#" class="logo">LOGO</a>
    <form class="search" action="#">
      <input
        type="search"
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
        <font-awesome-icon :icon="['fas', 'search']" class="search__icon" />
      </button>
    </form>
    <s-header-main-authorization />
    <a href="#" class="wishlist">
      <img src="@/assets/image/icons/heart.svg" alt="" class="wishlist__icon" />
    </a>
    <a href="#" class="cart">
      <img src="@/assets/image/icons/cart.svg" alt="" class="cart__icon" />
    </a>
  </div>
</template>

<script>
import sHeaderMainAuthorization from "@/components/header/s-header-main-authorization";

export default {
  components: {
    sHeaderMainAuthorization,
  },
  name: "s-header-main",
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
    flex-shrink: 0;
    &__icon {
      width: 32px;
      height: 29px;
    }
  }
  .cart {
    margin-left: 20px;
    margin-right: 15px;
    flex-shrink: 0;
    &__icon {
      width: 26px;
      height: 35px;
    }
  }
}
</style>