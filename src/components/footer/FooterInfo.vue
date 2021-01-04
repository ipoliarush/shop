<template>
  <div id="footer-info" class="info">
    <div class="wrap">
      <router-link to="/" class="logo">LOGO</router-link>
      <div class="soc">
        <p class="soc__title">Наші соцмережі</p>
        <div class="soc__wrap">
          <a href="#" class="soc__icon">
            <icon-base viewBox="0 0 12 22" width="12" height="22">
              <icon-facebook />
            </icon-base>
          </a>
          <a href="#" class="soc__icon">
            <icon-base viewBox="0 0 19 19" width="19" height="19">
              <icon-instagram />
            </icon-base>
          </a>
        </div>
      </div>
    </div>
    <div class="wrap wrap-sec">
      <div class="nav">
        <p class="nav__name">{{ menu.title }}</p>
        <footer-nav-item
          :title="menu.title"
          :navs="menu.navs"
          class="nav__list"
        />
      </div>
    </div>
    <div class="wrap">
      <div class="phone">
        <p class="phone__title">Є питання? Дзвоніть</p>
        <div class="phone__wrap">
          <a href="tel:380999999999" class="phone__link">+38 (099) 999-9999</a>
          <a href="tel:380999999999" class="phone__link">+38 (099) 999-9999</a>
        </div>
      </div>
      <div class="payway">
        <p class="payway__title">Ми приймаємо</p>
        <div class="payway__wrap">
          <div class="payway__icon">
            <img
              class="payway__image"
              src="@/assets/image/payway/visa.png"
              alt="visa"
            />
          </div>
          <div class="payway__icon">
            <img
              class="payway__image"
              src="@/assets/image/payway/mc.png"
              alt="mastercard"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FooterNavItem from "@/components/footer/FooterNavItem";
import IconBase from "@/components/icons/IconBase";
import IconFacebook from "@/components/icons/IconFacebook";
import IconInstagram from "@/components/icons/IconInstagram";

export default {
  components: {
    FooterNavItem,
    IconBase,
    IconFacebook,
    IconInstagram
  },
  name: "FooterInfo",
  props: {},
  data: () => ({
    menu: {
      title: "Навігатор",
      navs: [
        {
          name: "Каталог товарів",
          url: "/a",
        },
        {
          name: "Доставка та оплата",
          url: "/b",
        },
        {
          name: "Знижки",
          url: "/c",
        },
        {
          name: "Про нас",
          url: "/d",
        },
        {
          name: "Контакти",
          url: "/f",
        },
        {
          name: "Допомога",
          url: "/g",
        },
        {
          name: "Повернення товару",
          url: "/e",
        },
      ],
    },
  }),
  computed: {},
};
</script>

<style lang="scss" scoped>
.info {
  color: #fff;
  display: flex;
  width: 100%;
  align-items: flex-start;

  @include respond-to('medium') {
    display: block;
    width: 25%;
  }

  .wrap {
    width: 50%;

    @include respond-to('small') {
      width: 33.33%;
    }

    @include respond-to('medium') {
      width: 100%;
    }
  }

  .wrap-sec {
    display: none;

    @include respond-to('small') {
      display: block;
    }

    @include respond-to('medium') {
      display: none;
    }
  }
  .nav__name {
    color: #fff;
    font-size: 18px;
    margin-bottom: 15px;
  }
  .nav__list {
    display: flex;
    flex-direction: column;
  }

  .logo {
    font-size: 36px;
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    line-height: 1em;
  }
  .soc__title,
  .phone__title,
  .payway__title {
    font-weight: 300;
    font-size: 16px;
    margin: 30px 0 10px;
  }
  .phone__title,
  .payway__title {
    margin-top: 0;

    @include respond-to('medium') {
      margin-top: 30px;
    }
  }
  .payway__title {
    margin-top: 10px;
  }

  .soc__wrap,
  .phone__wrap,
  .payway__wrap {
    display: flex;
  }
  
  .soc__icon {
    @extend %soc-icon;
    width: 36px;
    height: 36px;
    font-size: 20px;

    &:first-child {
      margin-right: 10px;
    }

    &:hover .svg {
      fill: $orange;
    }
  }

  .phone__wrap {
    flex-direction: column;
  }
  .phone__link {
    color: #fff;
    font-weight: 500;
    font-size: 14px;
    text-decoration: none;
    margin-bottom: 5px;
    width: max-content;
    transition: color .5s ease;

    &:hover {
      color: $orange;
    }

    @include respond-to('small') {
      font-size: 16px;
    }
  }
  
  .payway__image {
    width: 100%;
    max-width: 72px;
  }
}
</style>
