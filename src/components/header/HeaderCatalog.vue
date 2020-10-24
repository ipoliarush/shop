<template>
  <div class="catalog">
    <div @click="isShowCatalog = !isShowCatalog" class="catalog__wrap">
      Каталог товарів
      <div class="burger burger--active">
        <span
          :class="[isShowCatalog ? 'burger__one--active' : '', 'burger__one']"
        ></span>
        <span
          :class="[isShowCatalog ? 'burger__two--active' : '', 'burger__two']"
        ></span>
        <span
          :class="[
            isShowCatalog ? 'burger__three--active' : '',
            'burger__three',
          ]"
        ></span>
      </div>
    </div>
    <transition name="fade-in">
      <div v-if="isShowCatalog" class="catalog__list">
        <a
          v-for="(item, index) in items"
          class="catalog__item"
          :key="index"
          href="#"
          >{{ item.name }}
          <font-awesome-icon
            :icon="['fas', 'chevron-right']"
            class="catalog__icon"
        /></a>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "HeaderCatalog",
  props: {},
  data: () => ({
    items: [
      { name: "Домашня техніка" },
      { name: "Смартфони, Тв та електроніка" },
      { name: "Інструменти та автотовари" },
      { name: "Одяг, взутя та прикраси" },
      { name: "Продукти харчування" },
      { name: "Дитячі товари" },
      { name: "Хоббі, відпочинок та розваги" },
      { name: "Сад та огород" },
      { name: "Товари для дому" },
    ],
    isShowCatalog: false,
  }),
  computed: {},
};
</script>

<style lang="scss" scoped>
.catalog {
  position: relative;
  &__wrap {
    background: $blue;
    color: #fff;
    font-size: 18px;
    display: flex;
    padding: 17px 25px;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    z-index: 10;
  }

  .burger {
    margin-right: 9px;
    &__one,
    &__two,
    &__three {
      display: block;
      width: 33px;
      height: 4px;
      background: #fff;
      border-radius: 50px;
      margin-bottom: 6px;
      transition: 0.55s 0.5s;
    }
    &__one {
      &--active {
        transform: translate(0, 10px) rotate(45deg);
      }
    }
    &__two {
      &--active {
        opacity: 0;
      }
    }
    &__three {
      margin-bottom: 0;
      &--active {
        transform: translate(0, -10px) rotate(-405deg);
      }
    }
  }
  &__list {
    z-index: 9;
    position: absolute;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    background: #fff;
    border-radius: 10px;
    max-width: 346px;
    width: 100%;
    left: 0;
    top: 72px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: rgba($blue, 0.7);
    text-decoration: none;
    padding: 10px 25px;
    transition: color ease 0.5s;
    &:hover {
      color: $orange;
    }
  }
  &__icon {
    font-size: 12px;
  }
  .fade-in-enter-active {
    transition: 0.5s ease;
  }
  .fade-in-leave-active {
    transition: 0.55s 0.5s;
  }
  .fade-in-enter,
  .fade-in-leave-to {
    transform: translateY(-15px);
    opacity: 0;
  }
}
</style>