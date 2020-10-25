<template>
  <div class="header-bottom">
    <div class="mobile-open" @click.prevent="openMenu">
      <icon-base :icon-color="white" width="27" height="20">
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
        <icon-base :icon-color="white">
          <icon-search />
        </icon-base>
      </button>
    </form>
    <a href="#" class="cart">
      <icon-base width="25" height="33">
        <icon-cart />
      </icon-base>
    </a>
    <div v-if="isMenu" class="mobile-menu" ref="mobileMenu">
      <div class="mobile-menu__content">
        <div class="mobile-menu__side">
          <div class="mobile-menu__header">
            <a href="#" class="logo"> Logo </a>
            <div class="lang">
              <p class="lang__item">RU</p>
              <div class="lang__hline"></div>
              <p class="lang__item lang__item-active">UA</p>
            </div>
            <div class="mobile-close" @click.prevent="closeMenu">
              <icon-base :icon-color="white" width="20" height="20">
                <icon-close />
              </icon-base>
            </div>
          </div>
          <div class="mobile-menu__body">
            <div class="menu">
              <ul class="menu__list">
                <li v-for="item of navs" :key="item.link" class="menu__item">
                  <a :href="item.link" class="menu__link">
                    {{ item.name }}
                    <icon-base icon-color="#2A2C30" width="6" height="10">
                      <icon-right />
                    </icon-base>
                  </a>
                </li>
              </ul>
            </div>
            <div class="wline"></div>
            <div class="tech">
              <header-tech
                :counter="1"
                text="Особистий кабінет"
                link="/mycabinet"
              >
                <icon-base width="17" height="17" icon-color="#2A2C30">
                  <icon-user />
                </icon-base>
              </header-tech>

              <header-tech :counter="2" text="Кошик" link="/cart">
                <icon-base width="17" height="21" icon-color="#2A2C30">
                  <icon-cart-mini />
                </icon-base>
              </header-tech>

              <header-tech :counter="25" text="Бажане" link="/wish">
                <icon-base width="22" height="20" icon-color="#2A2C30">
                  <icon-wish />
                </icon-base>
              </header-tech>

              <header-tech text="Зв’язатись з менеждером" link="/message">
                <icon-base width="23" height="21" icon-color="#2A2C30">
                  <icon-message />
                </icon-base>
              </header-tech>
            </div>
            <div class="wline"></div>
            <div class="communication">
              <div class="contact">
                <p class="contact__text">Є питання ? Дзвоніть</p>
                <a href="tel:+380677603269" class="contact__link">
                  +38 (067) 760-3269
                </a>
                <a href="tel:+380677603269" class="contact__link">
                  +38 (067) 760-3269
                </a>
              </div>
              <div class="social">
                <p class="social__text">Наші соцмережі</p>
                <div class="social__group">
                  <a href="#face" class="social__link">
                    <icon-base width="13" height="22" icon-color="#2A2C30">
                      <icon-facebook />
                    </icon-base>
                  </a>
                  <a href="#inst" class="social__link">
                    <icon-base width="19" height="19" icon-color="#2A2C30">
                      <icon-instagram />
                    </icon-base>
                  </a>
                </div>
              </div>
            </div>
            <div class="wline"></div>
          </div>
        </div>
      </div>
      <div class="mobile-menu__overlay" @click.prevent="closeMenu"></div>
    </div>
  </div>
</template>

<script>
import HeaderTech from "./HeaderTech";

import IconBase from "@/components/icons/IconBase";
import IconSearch from "@/components/icons/IconSearch";
import IconCart from "@/components/icons/IconCart";
import IconBurger from "@/components/icons/IconBurger";
import IconClose from "@/components/icons/IconClose";
import IconRight from "@/components/icons/IconRight";
import IconUser from "@/components/icons/IconUser";
import IconCartMini from "@/components/icons/IconCartMini";
import IconWish from "@/components/icons/IconWish";
import IconMessage from "@/components/icons/IconMessage";
import IconFacebook from "@/components/icons/IconFacebook";
import IconInstagram from "@/components/icons/IconInstagram";

export default {
  name: "HeaderInfopanel",
  components: {
    HeaderTech,
    IconBase,
    IconSearch,
    IconCart,
    IconBurger,
    IconClose,
    IconRight,
    IconUser,
    IconWish,
    IconMessage,
    IconCartMini,
    IconFacebook,
    IconInstagram,
  },
  props: {},
  data: () => ({
    isMenu: false,
    white: "#fff",
    navs: [
      { name: "Каталог товарів", link: "/k" },
      { name: "Доставка та оплата", link: "/a" },
      { name: "Знижки", link: "/b" },
      { name: "Про нас", link: "/c" },
      { name: "Контакти", link: "/d" },
      { name: "Допомога", link: "/f" },
      { name: "Повернення товару", link: "/g" },
    ],
  }),
  computed: {},
  methods: {
    onResize() {
      this.isMenu = document.documentElement.clientWidth > 992 ? false : true;
    },
    openMenu() {
      if (this.isMenu) {
        this.$refs.mobileMenu.hidden = false;
        document.body.style = "overflow: hidden";
        for (let item of this.$refs.mobileMenu.childNodes) {
          item.style.transform = "translateX(0)";
        }
      }
    },
    closeMenu() {
      if (this.isMenu) {
        this.$refs.mobileMenu.hidden = true;
        document.body.style = "";
        for (let item of this.$refs.mobileMenu.childNodes) {
          item.style.transform = "translateX(-110%)";
        }
      }
    },
  },
  created() {
    window.addEventListener("resize", this.onResize);
    this.onResize();
  },
  beforeDestriy: {
    beforeDestroy() {
      window.removeEventListener("resize", this.onResize);
    },
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

  .mobile-open {
    display: flex;
    cursor: pointer;

    
  }

  .search {
    display: flex;
    width: 100%;
    margin: 0 24px;

    &__input {
      width: 100%;
      padding: 5px 22px;
      border: 1px solid rgba(#2a2c30, 0.2);
      color: rgba(#2a2c30, 0.5);
      border-top-left-radius: 50px;
      border-bottom-left-radius: 50px;
      border-right: none;
    }
    &__button {
      border: none;
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;
      padding: 0 12px;
      color: #fff;
      background: $orange;
      display: flex;
      align-items: center;
      cursor: pointer;

      .path {
      }
    }
  }
  .cart {
    display: flex;
    align-items: center;
    color: #fff;
  }
  .mobile-menu {
    display: block;

    &--visible {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1000;
    }

    &__side {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    &__content {
      left: 0;
      top: 0;
      position: fixed;
      max-width: 500px;
      z-index: 20;
      width: 100%;
      height: 100%;
      transform: translateX(-110%);
      transition: all 0.5s;
      overflow-y: auto;
    }
    &__header {
      background: #2a2c30;
      max-height: 50px;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 10px 5px 15px;

      .logo {
        font-size: 25px;
        color: $orange;
        text-transform: uppercase;
        text-decoration: none;
      }
      .lang {
        display: flex;
        margin-left: auto;
        margin-right: 30px;
        align-items: center;
        &__item {
          color: #fff;
          &-active {
            color: rgba(#fff, 0.5);
          }
        }

        &__hline {
          width: 1px;
          height: 15px;
          background: rgba(#fff, 0.5);
          margin: 0 5px;
        }
      }
      .mobile-close {
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 5px;
      }
    }
    &__body {
      background: #fff;
      overflow-y: scroll;

      .wline {
        height: 1px;
        background: #f5f5f5;
        width: 95%;
        margin: 20px auto;
      }

      .menu {
        &__list {
          padding-top: 20px;
        }
        &__link {
          @extend %link-menu;
          padding: 10px 35px 10px 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: color ease 0.5s;

          &:hover .svg {
            fill: $orange;
          }
        }
      }
    }
    &__overlay {
      background: rgba(#000, 0.5);
      position: fixed;
      left: 0;
      top: 0;
      width: 100vw;
      height: 100%;
      overflow: auto;
      opacity: 1;
      transform: translateX(-110%);
      z-index: 19;
    }
  }
  .communication {
    display: flex;
    color: $blue;
    font-size: 16px;
    font-weight: 300;
    padding: 0 15px;

    .contact,
    .social {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      &__text {
        margin-bottom: 10px;
      }
    }
    .contact {
      width: 58%;

      &__link {
        text-decoration: none;
        color: $blue;
        font-weight: 500;
        transition: color ease 0.5s;

        &:hover {
          color: $orange;
        }
      }
    }
    .social {
      width: 42%;

      &__group {
        display: flex;
      }
      &__link {
        @extend %soc-icon;
        width: 32px;
        height: 32px;
        background: #f5f5f5;
        transition: fill ease 0.5s;

        &:hover .svg {
          fill: $orange;
        }
      }
    }
  }
}
</style>