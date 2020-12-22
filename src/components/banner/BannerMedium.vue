<template>
  <div class="banner-medium">
    <div class="bg"></div>
    <div class="image-wrap">
      <img class="img" src="~@/assets/image/banner/banner-medium-img.png" alt="">
    </div>
    <div class="wrap">
      <div class="head">
        <div class="image-inner">
          <img class="img" src="~@/assets/image/banner/banner-medium-img.png" alt="">
        </div>
        <div class="content">
          <h3 class="title">
            Знижки від <span class="title__big">20%</span>
          </h3>
          <p class="text">
            На всю зимову коллекцію
          </p>
        </div>
      </div>
      <div class="timer">
        <div class="timer__head">
          до кінця акції залишається
        </div>
        <div class="timer__body">
          <div class="timer__wrap">
            <div class="timer__time">
              66
            </div>
            <div class="timer__text">
              днів
            </div>
          </div>
          <div class="timer__wrap">
            <div class="timer__time">
              44
            </div>
            <div class="timer__text">
              годин
            </div>
          </div>
          <div class="timer__wrap">
            <div class="timer__time">
              22
            </div>
            <div class="timer__text">
              хвилин
            </div>
          </div>
          <div class="timer__wrap">
            <div class="timer__time">
              00
            </div>
            <div class="timer__text">
              секунд
            </div>
          </div>
        </div>
        
      </div>
      <a href="#" class="button">
        Детальніше
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerMedium",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.banner-medium {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('~@/assets/image/banner/banner-medium.jpg');
  padding: 22px 15px;
  justify-content: space-between;
  position: relative;
  z-index: 10;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  height: 370px;

  @include respond-to('small') {
    height: 432px;
  }

  @include respond-to('medium') {
    height: 301px;
    flex-direction: row;
    justify-content: space-around;
  }

  .bg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(#fff, 0.7);
    z-index: 9;
    border-radius: 10px;
  }

  .image-wrap {
    z-index: 10;
    display: none;

    @include respond-to('medium') {
      display: block;
      width: 100%;
    }

    .img {
      margin: 0 auto;
    }
  }
  .wrap {
    z-index: 10;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    @include respond-to('medium') {
      justify-content: space-around;
      align-items: flex-start;
      min-width: 260px;
    }
  }
  .head {
    display: flex;

    @include respond-to('small') {
      flex-direction: column;
      align-items: center;
    }
  }
  .image-inner {
    width: 100%;
    margin-right: 10px;
    position: relative;
    height: 150px;
    width: 150px;

    @include respond-to('small') {
      display: flex;
      margin-bottom: 10px;
      margin-right: 0;
      max-width: 160px;
    }

    @include respond-to('medium') {
      display: none;
    }

    .img {
      position: absolute;
      max-width: 200px;
      transform: translate(-50%, -50%);
      top: 40%;
      left: 50%;
    }
  }
  .content {
    @include respond-to('small') {
      display: flex;
      align-items: center;
    }

    @include respond-to('medium') {
      flex-direction: column;
      align-items: flex-start;
      margin-left: 8px;
    }
  }
  .title {
    font-size: 32px;
    color: $blue;
    font-weight: 400;
    width: 130px;
    line-height: 28px;

    @include respond-to('medium') {
      width: 100%;
      margin-bottom: 5px;
    }
  }
  .title__big {
    font-size: 32px;
    color: $orange;
    font-weight: 700;
    z-index: 10;

    @include respond-to('small') {
      font-size: 32px;
    }
  }
  .text {
    margin-top: 20px;
    font-size: 18px;
    font-weight: 400;
    color: $blue;
    z-index: 10;
    width: 100%;
    max-width: 130px;
    line-height: 22px;

    @include respond-to('small') {
      margin-top: 0;
    }

    @include respond-to('medium') {
      max-width: 100%;
    }
  }
  .timer {
    color: #000;
    z-index: 10;
    display: flex;
    flex-direction: column;
    font-weight: 300;
  }
  .timer__head {
    text-align: center;
    margin-bottom: 5px;

    @include respond-to('medium') {
      font-size: 18px;
    }
  }
  .timer__body {
    display: flex;
  }
  .timer__wrap {

    &:last-child {
      .timer__time::after {
        display: none;
      }
    }
  }
  .timer__time {
    font-size: 25px;
    width: 42px;
    height: 60px;
    background: #fff;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 0 9px;
    margin-bottom: 3px;

    &::after {
      display: block;
      content: ":";
      position: absolute;
      top: 10px;
      right: -12px;
    }
  }
  .timer__text {
    font-size: 14px;
    text-align: center;
  }
  .button {
    color: #fff;
    font-size: 18px;
    font-weight: 400;
    text-decoration: none;
    background: $orange;
    border-radius: 4px;
    padding: 10px 80px;
    z-index: 10;
    display: block;

    @include respond-to('medium') {
      padding: 10px 60px;
      margin-left: 9px;
    }
  }

}
</style>