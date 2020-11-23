<template>
  <ul class="header-nav">
    <li v-for="nav in navs" :key="nav.link" class="item">
      <a :href="nav.link" class="item__link">{{ nav.name }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "HeaderNav",
  props: {},
  data() {
    return {
      navs: [
        { name: "Доставка", link: "/a" },
        { name: "Знижки", link: "/b" },
        { name: "Про нас", link: "/c" },
        { name: "Контакти", link: "/d" },
        { name: "Допомога", link: "/f" },
        { name: "Повернення", link: "/g" },
      ],
    };
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.header-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  .item__link {
    text-decoration: none;
    color: rgba($blue, 0.6);
    transition: $ease05;
    &:hover {
      color: $blue;
    }
  }
}
</style>