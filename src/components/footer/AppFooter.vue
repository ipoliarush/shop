<template>
  <footer id="app-footer" class="footer">
    <div class="layout">
      <div class="body">
        <footer-info class="body__item" />
        <div class="nav">
          <p class="nav__name">{{ catalog.title }}</p>
          <footer-nav-item
            :title="catalog.title"
            :navs="catalog.navs"
            class="nav__list"
          />
        </div>
        <div class="nav">
          <p class="nav__name">{{ actual.title }}</p>
          <footer-nav-item
            :title="actual.title"
            :navs="actual.navs"
            class="nav__list"
          />
        </div>
        <div class="nav">
          <p class="nav__name">{{ menu.title }}</p>
          <footer-nav-item
            :title="menu.title"
            :navs="menu.navs"
            class="nav__list"
          />
        </div>
        <router-link to="#header" class="scroll-up">
          <icon-base class="svg" viewBox="0 0 7 4" width="21" height="12">
            <icon-arrow />
          </icon-base>
        </router-link>
      </div>
    </div>
    <footer-copy />
  </footer>
</template>

<script>
import FooterInfo from "@/components/footer/FooterInfo";
import FooterNavItem from "@/components/footer/FooterNavItem";
import FooterCopy from "@/components/footer/FooterCopy";
import IconBase from "@/components/icons/IconBase";
import IconArrow from "@/components/icons/IconArrow";

export default {
  components: {
    FooterCopy,
    FooterNavItem,
    FooterInfo,
    IconBase,
    IconArrow,

  },
  name: "AppFooter",
  props: {},
  data: () => ({
    catalog: {
      title: "Каталог",
      navs: [
        {
          name: "Домашня техніка",
          url: "/h",
        },
        {
          name: "Смартфони, Тв та електроніка",
          url: "/s",
        },
        {
          name: "Інструменти та автотовари",
          url: "/i",
        },
        {
          name: "Одяг, взутя та прикраси",
          url: "/o",
        },
        {
          name: "Продукти харчування",
          url: "/ph",
        },
        {
          name: "Дитячі товари",
          url: "/d",
        },
        {
          name: "Хоббі, відпочинок та розваги",
          url: "/hvr",
        },
        {
          name: "Сад та огород",
          url: "/so",
        },
        {
          name: "Товари для дому",
          url: "/t",
        },
      ],
    },
    actual: {
      title: "Актуальні товарі",
      navs: [
        {
          name: "Захистні маски",
          url: "/a",
        },
        {
          name: "Хоббі та розваги",
          url: "/b",
        },
        {
          name: "Спорядження для плавання",
          url: "/c",
        },
        {
          name: "Інструменти та автотовари",
          url: "/d",
        },
        {
          name: "Сад та огород",
          url: "/f",
        },
      ],
    },
    menu: {
      title: "Меню",
      navs: [
        {
          name: "Доставка і оплата",
          url: "/a",
        },
        {
          name: "Знижки",
          url: "/b",
        },
        {
          name: "Про нас",
          url: "/c",
        },
        {
          name: "Контакти",
          url: "/d",
        },
        {
          name: "Допомога",
          url: "/f",
        },
      ],
    },
    scroll: null,
  }),
  computed: {},
};
</script>

<style lang="scss" scoped>
.footer {
  background: $blue;

  .body {
    display: flex;
    padding: 90px 0;
    position: relative;
  }
    
  .scroll-up {
    display: flex;
    width: 44px;
    height: 44px;
    border-radius: 4px;
    background: $orange;
    justify-content: center;
    align-items: center;
    bottom: -22px;
    right: 0;
    position: absolute;
  }
  .scroll-up svg {
    transform: rotate(180deg);
  }
  
  .nav {
    display: none;
    flex-direction: column;
    width: 25%;

    @include respond-to('medium') {
      display: flex;
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
}
</style>