<template>
  <div id="footer-info" class="info">
    <router-link to="/" class="logo">LOGO</router-link>
    <div class="soc">
      <p class="soc__title">Наші соцмережі</p>
      <div class="soc__wrap">
        <a href="#" class="soc__icon">
          <font-awesome-icon :icon="['fab', 'facebook-f']" />
        </a>
        <a href="#" class="soc__icon">
          <font-awesome-icon :icon="['fab', 'instagram']" />
        </a>
      </div>
    </div>
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
        <a href="#" class="payway__icon">
          <img
            class="payway__image"
            src="@/assets/image/payway/visa.png"
            alt="visa"
          />
        </a>
        <a href="#" class="payway__icon">
          <img
            class="payway__image"
            src="@/assets/image/payway/mc.png"
            alt="mastercard"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "FooterInfo",
  props: {},
  data: () => ({}),
  computed: {},
};
</script>

<style lang="scss" scoped>
.info {
  color: #fff;
  .logo {
    font-size: 36px;
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    line-height: 1em;
  }
  .soc,
  .phone,
  .payway {
    &__title {
      font-weight: 300;
      font-size: 16px;
      margin: 30px 0 10px;
    }
    &__wrap {
      display: flex;
    }
  }
  .soc {
    &__icon {
      @extend %soc-icon;
      width: 36px;
      height: 36px;
      font-size: 20px;
    }
  }
  .phone {
    &__wrap {
      flex-direction: column;
    }
    &__link {
      color: #fff;
      font-weight: 500;
      font-size: 16px;
      text-decoration: none;
      margin-bottom: 5px;
      width: max-content;
    }
  }
  .payway {
    &__image {
      width: 100%;
      max-width: 72px;
    }
  }
}
</style>
