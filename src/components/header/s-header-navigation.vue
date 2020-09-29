<template>
  <div class="navigation">
    <a
      v-for="(item, index) in items"
      class="navigation__item"
      :key="index"
      href="#"
      >{{ item.name }}
    </a>
  </div>
</template>

<script>
export default {
  name: "s-header-navigation",
  props: {},
  data() {
    return {
      items: [
        { name: "Доставка та оплата" },
        { name: "Знижки" },
        { name: "Про нас" },
        { name: "Контакти" },
        { name: "Допомога" },
        { name: "Повернення товару" },
      ],
    };
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  align-items: center;
  font-size: 18px;
  justify-content: space-between;
  width: 100%;
  max-width: 890px;
  margin-left: 33px;
  &__item {
    text-decoration: none;
    color: rgba($blue, 0.8);
    transition: 0.5s;
    &:hover {
      color: $blue;
    }
  }
}
</style>