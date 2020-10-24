<template>
  <div class="header-infopanel">
    <div class="call">
      <font-awesome-icon :icon="['fas', 'phone-alt']" class="call__phone-alt" />
      <a class="call__link" href="tel:+380677693269">+38 (067) 760-32-69</a>
      <font-awesome-icon
        :icon="['fas', 'angle-down']"
        class="call__angle-down"
      />
    </div>
    <p class="delivery">Безкоштовна доставка від 500грн</p>
    <div class="lang">
      <p class="lang__active">Укр</p>
      <font-awesome-icon
        :icon="['fas', 'angle-down']"
        class="lang__angle-down"
      />
    </div>
    <div class="social">
      <a href="#" class="social__link">
        <font-awesome-icon :icon="['fab', 'facebook-f']" />
      </a>
      <a href="#" class="social__link">
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderInfopanel",
  props: {},
  data() {
    return {};
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.header-infopanel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  height: 38px;

  .call {
    &__link {
      color: #fff;
      text-decoration: none;
      margin-left: 10px;
    }
    &__angle-down {
      margin-left: 10px;
      font-size: 16px;
      margin-top: 5px;
    }
  }
  .delivery {
    margin-left: auto;
  }
  .lang {
    margin-left: auto;
    display: flex;
    align-items: center;
    margin-right: 30px;
    &__angle-down {
      margin-left: 10px;
      font-size: 14px;
    }
  }
  .social {
    display: flex;
    &__link {
      @extend %soc-icon;
      width: 20px;
      height: 20px;
    }
  }
}
</style>