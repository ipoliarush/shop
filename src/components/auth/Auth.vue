<template >
  <div class="auth">
    <div class="layout">
      <div class="wrap">
        <div class="body">
          <h1 class="title">Привіт, друже!</h1>
          <h3 class="subtitle">Приєднуйся до нас</h3>
          <p class="text">Отримуй першим усі новини та знижки</p>
        </div>
        <slot />
      </div>
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
  padding-top: 30px;

  .wrap {
    border-radius: 10px;
    position: relative;
    z-index: 2;
    display: flex;
    background-image: url("~@/assets/image/auth-bg.jpg");
    background-color: $blue;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    justify-content: space-between;
    flex-direction: column;

    @include respond-to('small') {
      flex-direction: row;
      align-items: center;
    }

    @include respond-to('medium') {
      padding: 55px 50px 55px 120px;
      align-items: center;
    }

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
  }

  .body {
    color: #fff;
    padding: 30px 20px;

    @include respond-to('small') {
      padding: 0;
      padding-left: 45px;
    }

    @include respond-to('medium') {
      padding: 0;
    }
  }

  .title {
    font-size: 32px;
    font-weight: 700;

    @include respond-to('medium') {
      font-size: 50px;
    }
  }

  .subtitle {
    font-size: 24px;
    font-weight: 300;

    @include respond-to('medium') {
      font-size: 30px;
    }
  }

  .text {
    font-size: 16px;
    font-weight: 300;
    margin-top: 10px;

    @include respond-to('medium') {
      font-size: 18px;
    }
  }
}
</style>