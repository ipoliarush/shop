<template>
  <div class="infopanel">
    <div class="infopanel__call">
      <font-awesome-icon
        :icon="['fas', 'phone-alt']"
        class="infopanel__call--phone"
      />
      <a class="infopanel__call--item" href="tel:+380677693269"
        >+38 (067) 760-32-69</a
      >
      <font-awesome-icon
        :icon="['fas', 'angle-down']"
        class="infopanel__call--down"
      />
    </div>
    <p class="infopanel__delivery">Безкоштовна доставка від 500грн</p>
    <div class="infopanel__lang">
      <p class="infopane__lang--item">Укр</p>
      <font-awesome-icon
        :icon="['fas', 'angle-down']"
        class="infopanel__lang--down"
      />
    </div>
    <div class="infopanel__social">
      <a href="#" class="infopanel__social--item">
        <font-awesome-icon :icon="['fab', 'facebook-f']" />
      </a>
      <a href="#" class="infopanel__social--item">
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "s-header-infopanel",
  props: {},
  data() {
    return {};
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.infopanel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  height: 38px;

  &__call {
    &--item {
      color: #fff;
      text-decoration: none;
    }
    &--phone {
      margin-right: 10px;
    }
    &--down {
      margin-left: 10px;
      font-size: 16px;
      margin-top: 5px;
    }
  }
  &__delivery {
    margin-left: auto;
  }
  &__lang {
    margin-left: auto;
    display: flex;
    align-items: center;
    margin-right: 30px;
    &--down {
      margin-left: 10px;
      font-size: 14px;
    }
  }
  &__social {
    display: flex;
    &--item {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      margin-left: 10px;
      width: 20px;
      height: 20px;
      background: rgba(#fff, 0.5);
      border-radius: 4px;
      transition: easy 0.5s;
      transition-property: background, color;
      &:hover {
        background: #fff;
        color: $orange;
      }
    }
  }
}
</style>