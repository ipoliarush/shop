<template>
  <div class="header-top">
    <div class="call">
      <icon-base height="11" width="11">
        <icon-call />
      </icon-base>
      <a class="call__link" href="tel:+380677693269">+38 (067) 760-32-69</a>
      <icon-base class="call__arrow" height="6" width="10">
        <icon-arrow />
      </icon-base>
    </div>
    <p class="delivery">Безкоштовна доставка від 500грн</p>
    <div class="lang">
      <p class="lang__active">Укр</p>
      <icon-base class="lang__arrow" height="6" width="10">
        <icon-arrow />
      </icon-base>
    </div>
    <div class="social">
      <a href="#" class="social__link">
        <icon-base height="14" width="7">
          <icon-facebook-mini />
        </icon-base>
      </a>
      <a href="#" class="social__link">
        <icon-base height="12" width="12">
          <icon-instagram-mini />
        </icon-base>
      </a>
    </div>
  </div>
</template>

<script>

import IconBase from "@/components/icons/IconBase";
import IconCall from "@/components/icons/IconCall";
import IconArrow from "@/components/icons/IconArrow";
import IconFacebookMini from "@/components/icons/IconFacebookMini";
import IconInstagramMini from "@/components/icons/IconInstagramMini";

export default {
  components: {
    IconBase,
    IconCall,
    IconArrow,
    IconFacebookMini,
    IconInstagramMini
  },
  name: "HeaderTop",
  props: {},
  data() {
    return {};
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.header-top {
  display: none;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  height: 38px;

  @include respond-to('medium') {
    display: flex;
  }
  .call {
    display: flex;
    align-items: center;
  }
  .call__link {
    color: #fff;
    text-decoration: none;
    margin-left: 10px;
  }
  .call__arrow {
    margin-left: 10px;
  }
  .delivery {
    margin-left: auto;
  }
  .lang {
    margin-left: auto;
    display: flex;
    align-items: center;
    margin-right: 30px;
  }
  .lang__arrow {
    margin-left: 10px;
  }
  .social {
    display: flex;
    align-items: center;
  }
  .social__link {
    @extend %soc-icon;
    width: 20px;
    height: 20px;
    margin-right: 17px;

    &:last-child {
      margin-right: 0;
    }

    &:hover .svg {
      fill: $orange;
    }
  }
}
</style>