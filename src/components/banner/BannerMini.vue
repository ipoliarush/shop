<template>
  <a href="#" class="banner-mini">
    <div class="bg"></div>
    <h2 class="title">
      Знижки
    </h2>
    <h3 class="subtitle">
      до <span class="subtitle__big">50%</span>
    </h3>
    <p class="text">
      На усю літню коллекцію
    </p>
  </a>
</template>

<script>
export default {
  name: "BannerMini",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.banner-mini {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-image: url('~@/assets/image/banner/banner-mini1.jpg');
  padding: 17px 15px;
  justify-content: space-between;
  position: relative;
  z-index: 10;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  text-decoration: none;

  .bg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba($blue, 0.7);
    z-index: 9;
    border-radius: 10px;

  }
  .title {
    font-size: 25px;
    color: #fff;
    font-weight: 400;
    z-index: 10;

    @include respond-to('small') {
      font-size: 30px;
    }

    @include respond-to('medium') {
      font-size: 25px;
    }
  }
  .subtitle {
    font-size: 25px;
    color: $orange;
    font-weight: 400;
    z-index: 10;

    @include respond-to('small') {
      font-size: 20px;
    }
  }
  .subtitle__big {
    font-size: 25px;
    font-weight: 700;
    z-index: 10;

    @include respond-to('medium') {
      font-size: 55px;
    }
  }
  .text {
    font-size: 14px;
    font-weight: 400;
    color: #fff;
    z-index: 10;

    @include respond-to('small') {
      font-size: 16px;
    }
  }
}
</style>