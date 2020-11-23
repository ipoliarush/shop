<template>
  <div class="catalog">
    <div @click="isOpen = !isOpen" class="wrap">
      Каталог товарів
      <div class="burger">
        <icon-base v-if="!isOpen" view-box="0 0 27 20" width="27" height="20">
          <icon-burger />
        </icon-base>
        <icon-base v-else view-box="0 0 23 20" width="23" height="20">
          <icon-close />
        </icon-base>
      </div>
    </div>
    <transition name="fade-in">
      <div v-if="isOpen" class="list">
        <a
          v-for="(item, index) in items"
          class="list__item"
          :key="index"
          href="#"
          >
            {{ item.name }}
            <icon-base width="6" height="10" icon-color="rgba(42, 44, 48, 0.7)">
              <icon-right />
            </icon-base>
          </a>
      </div>
    </transition>
  </div>
</template>

<script>
import IconBase from "@/components/icons/IconBase";
import IconBurger from "@/components/icons/IconBurger";
import IconClose from "@/components/icons/IconClose";
import IconRight from "@/components/icons/IconRight";

export default {
  name: "HeaderCatalog",
  components: {
    IconBase,
    IconBurger,
    IconClose,
    IconRight,
  },
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
    isOpen: false,
  }),
  computed: {},
};
</script>

<style lang="scss" scoped>
.catalog {
  position: relative;
  .wrap {
    background: $blue;
    color: #fff;
    font-size: 16px;
    display: flex;
    padding: 17px 25px;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    z-index: 10;
  }

  .burger {
    display: flex;
  }

  .list {
    z-index: 9;
    position: absolute;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    background: #fff;
    border-radius: 10px;
    width: 100%;
    left: 0;
    top: 72px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .list__item {
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
    &:hover .svg {
      fill: $orange;
    }
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