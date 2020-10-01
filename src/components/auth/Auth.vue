<template >
  <div class="container">
    <div class="auth">
      <div class="auth__body">
        <h1>Привіт, друже!</h1>
        <h3 class="auth__subtitle">Приєднуйся до нас</h3>
        <p class="auth__text">Отримуй першим усі новини та знижки</p>
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "Auth",
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
  position: relative;
  z-index: 2;
  display: flex;
  background-image: url("~@/assets/image/auth-bg.jpg");
  background-color: $blue;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  align-items: center;
  justify-content: space-between;
  padding: 55px 50px 55px 120px;

  &::after {
    border-radius: 10px;
    content: "";
    background: rgba($blue, 0.7);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
  &__body {
    color: #fff;
  }
  &__text {
    font-size: 18px;
    margin-top: 10px;
  }
}
</style>