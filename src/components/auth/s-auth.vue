<template >
  <div class="container">
    <div class="auth">
      <div class="auth__body">
        <h1 class="auth__title">Привіт, друже!</h1>
        <h3 class="auth__subtitle">Приєднуйся до нас</h3>
        <p class="auth__text">Отримуй першим усі новини та знижки</p>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "s-auth",
  props: {},
  data() {
    return {};
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.auth {
  border-radius: 10px;
  margin-top: 33px;
  position: relative;
  z-index: 10;
  display: block;
  background: $blue url("~@/assets/image/auth-bg.jpg");

  &::after {
    border-radius: 10px;
    content: "";
    background: rgba($blue, 0.7);
    opacity: 0.5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }

  &__body {
  }
  &__title {
  }
}
</style>