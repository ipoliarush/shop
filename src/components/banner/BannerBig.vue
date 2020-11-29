<template>
  <div class="banner-big">
    <div class="bg"></div>
    <h2 class="title">
      Розпродаж
    </h2>
    <h3 class="subtitle">
      Знижки до <span class="subtitle__big">50%</span>
    </h3>
    <p class="text">
      На усю коллекцію побутової техніки
    </p>
    <p class="minitext">
      Поспішай! Акція діє до 27.07.2020
    </p>
    <a href="#" class="button">
      Детальніше
    </a>
  </div>
</template>

<script>
export default {
  name: "BannerBig",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.banner-big {
  display: flex;
  flex-direction: column;
  align-items: start;
  background-image: url('~@/assets/image/slide/big-slide1.jpg');
  padding: 45px 10% 80px 10%;
  justify-content: space-between;
  position: relative;
  z-index: 10;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;

  .bg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(87.48deg, rgba(255, 255, 255, 0.8) 17.53%, rgba(255, 255, 255, 0.8) 44.71%, rgba(255, 255, 255, 0) 69.67%);
filter: drop-shadow(0px 4px 25px rgba(0, 0, 0, 0.1));
    z-index: 9;
    border-radius: 10px;

  }
  .title {
    font-size: 32px;
    color: #000;
    font-weight: 700;
    z-index: 10;
    line-height: 30px;

    @include respond-to('small') {
      font-size: 40px;
    }

    @include respond-to('medium') {
      font-size: 50px;
    }
  }
  .subtitle {
    font-size: 24px;
    color: $blue;
    font-weight: 400;
    z-index: 10;

    @include respond-to('medium') {
      font-size: 35px;
    }
  }
  .subtitle__big {
    font-size: 35px;
    color: $orange;
    font-weight: 700;
    z-index: 10;

    @include respond-to('small') {
      font-size: 32px;
    }

    @include respond-to('medium') {
      font-size: 41px;
    }
  }
  .text {
    font-size: 16px;
    font-weight: 400;
    color: $blue;
    z-index: 10;
    width: 100%;
    max-width: 160px;

    @include respond-to('small') {
      font-size: 18px;
      max-width: 250px;
    }

    @include respond-to('medium') {
      max-width: 100%;
    }
  }
  .minitext {
    font-size: 14px;
    font-weight: 300;
    color: $blue;
    z-index: 10;
    width: 100%;
    max-width: 116px;
    padding-top: 10px;

    @include respond-to('small') {
      font-size: 16px;
      max-width: 180px;
      padding-bottom: 10px;
    }

    @include respond-to('medium') {
      max-width: 100%;

    }
  }
  .button {
    color: #fff;
    font-size: 18px;
    font-weight: 400;
    text-decoration: none;
    background: $orange;
    border-radius: 4px;
    padding: 10px 50px;
    z-index: 10;
    overflow: hidden;
    display: none;

    @include respond-to('small') {
      overflow: visible;
      display: block;
    }
  }
}
</style>