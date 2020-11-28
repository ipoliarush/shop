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
    font-size: 50px;
    color: #000;
    font-weight: 700;
    z-index: 10;
  }
  .subtitle {
    font-size: 35px;
    color: $blue;
    font-weight: 400;
    z-index: 10;
  }
  .subtitle__big {
    font-size: 41px;
    color: $orange;
    font-weight: 700;
    z-index: 10;
  }
  .text {
    font-size: 18px;
    font-weight: 400;
    color: $blue;
    z-index: 10;
  }
  .minitext {
    font-size: 16px;
    font-weight: 300;
    color: $blue;
    z-index: 10;
  }
  .button {
    color: #fff;
    font-size: 18px;
    font-weight: 400;
    text-decoration: none;
    background: $orange;
    border-radius: 4px;
    padding: 12px 55px;
    display: block;
    z-index: 10;
  }
}
</style>