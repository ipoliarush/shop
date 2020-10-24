<template>
  <a :href="link" class="header-tech">
    <div class="circle">
      <slot />
    </div>
    <p class="text">{{ text }}</p>
    <div v-if="counter" class="counter">
      <p class="number">{{ counter }}</p>
    </div>
  </a>
</template>

<script>
export default {
  name: "HeaderTech",
  props: {
    text: {
      type: String,
    },
    link: {
      type: String,
    },
    counter: {
      type: Number,
    },
  },
};
</script>

<style lang="scss" scoped>
.header-tech {
  @extend %link-menu;
  @extend %path-hover;
  padding: 12px 15px;
  transition: color ease 0.5s;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover .svg {
    fill: $orange;
  }
  .circle {
    @extend %circle;
    margin-right: 15px;
  }
  .text {
    margin-right: auto;
  }
  .counter {
    background: $orange;
    min-width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    padding-left: 5px;
    padding-right: 5px;

    .number {
      margin-bottom: -2px;
      line-height: 14px;
      color: #fff;
      font-size: 14px;
    }
  }
}
</style>