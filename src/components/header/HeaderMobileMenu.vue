<template>
  <div class="mobile-menu" ref="mobileMenu">
    <div class="content">
      <div class="side">
        <div class="header">
          <a href="#" class="logo">Logo</a>
          <div class="lang">
            <p class="lang__item">RU</p>
            <div class="hline"></div>
            <p class="lang__item lang__item-active">UA</p>
          </div>
          <div class="mobile-close" @click.prevent="closeMenu">
            <icon-base :icon-color="white" width="20" height="20">
              <icon-close />
            </icon-base>
          </div>
        </div>
        <div class="body">
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
            <header-tech v-if="USER.name" :text="USER.name" :counter="1" link="/cabinet">
              <icon-base width="17" height="17" icon-color="#2A2C30">
                <icon-user />
              </icon-base>
            </header-tech>

            <header-tech v-else text="Увійти" link="/login">
              <icon-base width="17" height="17" icon-color="#2A2C30">
                <icon-user />
              </icon-base>
            </header-tech>

            <header-tech text="Кошик" :counter="2" link="/cart">
              <icon-base view-box="0 0 26 35" width="17" height="21" icon-color="#2A2C30">
                <icon-cart />
              </icon-base>
            </header-tech>

            <header-tech text="Бажане" :counter="25" link="/wish">
              <icon-base view-box="0 0 32 30" width="22" height="20" icon-color="#2A2C30">
                <icon-wish />
              </icon-base>
            </header-tech>

            <header-tech text="Зворотній зв'язок" link="/message">
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
    <div class="overlay" @click.prevent="closeMenu"></div>
  </div>
</template>

<script>
import HeaderTech from "./HeaderTech";

import IconBase from "@/components/icons/IconBase";
import IconClose from "@/components/icons/IconClose";
import IconRight from "@/components/icons/IconRight";
import IconUser from "@/components/icons/IconUser";
import IconCart from "@/components/icons/IconCart";
import IconWish from "@/components/icons/IconWish";
import IconMessage from "@/components/icons/IconMessage";
import IconFacebook from "@/components/icons/IconFacebook";
import IconInstagram from "@/components/icons/IconInstagram";
import { mapGetters, mapState } from 'vuex'

export default {
  name: "HeaderMobileMenu",
  components: {
    HeaderTech,
    IconBase,
    IconClose,
    IconRight,
    IconUser,
    IconWish,
    IconMessage,
    IconCart,
    IconFacebook,
    IconInstagram,
  },
  props: {},
  data: () => ({
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
  computed: {
    ...mapGetters('auth', [
      'USER',
    ]),
    ...mapState('auth', [
      'status',
    ])
  },
  methods: {
    closeMenu() {
      console.log(this.status)
      this.$refs.mobileMenu.hidden = true;
      document.body.style = "";
      for (let item of this.$refs.mobileMenu.childNodes) {
        item.style.transform = "translateX(-110%)";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.mobile-menu {
  display: block;

  .side {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  .content {
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

  .header {
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

      .hline {
        width: 1px;
        height: 15px;
        background: rgba(#fff, 0.5);
        margin: 0 5px;
      }
    }
    .lang__item {
      color: #fff;
    }
    .lang__item-active {
      color: rgba(#fff, 0.5);
    }
  
    .mobile-close {
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 5px;
    }
  }

  .body {
    background: #fff;
    overflow-y: scroll;

    .wline {
      height: 1px;
      background: #f5f5f5;
      width: 95%;
      margin: 20px auto;
    }

    .menu__list {
      padding-top: 20px;
    }
    .menu__link {
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

  .overlay {
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
      align-items: flex-start;
    }
    .contact__text, 
    .social__text {
      margin-bottom: 10px;
    }
    .contact {
      width: 58%;
    }
    .contact__link {
      text-decoration: none;
      color: $blue;
      font-weight: 500;
      transition: color ease 0.5s;

      &:hover {
        color: $orange;
      }
    }
    .social {
      width: 42%;
    }
    .social__group {
      display: flex;
    }
    .social__link {
      @extend %soc-icon;
      width: 32px;
      height: 32px;
      background: #f5f5f5;
      transition: fill ease 0.5s;
      margin-right: 17px;

      &:hover .svg {
        fill: $orange;
      }
    }
  }
}
</style>