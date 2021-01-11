<template>
  <div class="header-bottom">
    <div class="mobile-open" @click="MOBILE_MENU_OPEN">
      <icon-base width="27" height="20">
        <icon-burger />
      </icon-base>
    </div>
    <form class="search" action="#">
      <input
        type="text"
        name="search"
        class="search__input"
        placeholder="Пошук"
      />
      <button class="search__button" type="submit">
        <icon-base view-box="0 0 20 20" width="14" height="14">
          <icon-search />
        </icon-base>
      </button>
    </form>
    <a href="#" class="cart">
      <div class="counter">
        <p class="counter__number">{{ counter }}</p>
      </div>
      <icon-base view-box="0 0 26 35" width="26" height="35">
        <icon-cart />
      </icon-base>
    </a>
    <mobile-menu ref="mobileMenu" />
  </div>
</template>

<script>
import IconBase from "@/components/icons/IconBase";
import IconSearch from "@/components/icons/IconSearch";
import IconCart from "@/components/icons/IconCart";
import IconBurger from "@/components/icons/IconBurger";
import MobileMenu from "@/components/header/HeaderMobileMenu";

import { mapGetters, mapActions } from "vuex"

export default {
  name: "HeaderBottom",
  components: {
    IconBase,
    IconSearch,
    IconCart,
    IconBurger,
    MobileMenu,
  },
  props: {},
  data: () => ({
    white: "#fff",
    counter: 12
  }),
  computed: {
    ...mapGetters([
      'IS_MOBILE_MENU',
    ])
  },
  methods: {
    ...mapActions([
      'MOBILE_MENU_OPEN',
    ]),
    // document.body.style = "overflow: hidden";
  },
};
</script>

<style lang="scss" scoped>
.header-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  height: 50px;
  position: relative;

  @include respond-to('medium') {
    display: none;
  }

  .mobile-open {
    display: flex;
    cursor: pointer;
  }

  .search {
    display: flex;
    width: 100%;
    margin: 0 24px;
  }
  .search__input {
    width: 100%;
    padding: 5px 22px;
    border: 1px solid rgba(#2a2c30, 0.2);
    color: rgba(#2a2c30, 0.5);
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    border-right: none;
  }
  .search__button {
    border: none;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    padding: 0 12px;
    color: #fff;
    background: $orange;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .cart {
    display: flex;
    align-items: center;
    color: #fff;
    position: relative;
  }
  .counter {
    background: $orange;
    min-width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    padding-left: 5px;
    padding-right: 5px;
    position: absolute;
    top: 0;
    right: -8px;
    box-shadow: 0px 4px 4px rgba(#000, 0.25);
  }
  .counter__number {
    margin-bottom: -2px;
    line-height: 10px;
    color: #fff;
    font-size: 10px;
  }
}
</style>
