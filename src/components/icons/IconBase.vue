<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="viewBox"
    role="presentation"
    :fill="iconColor"
    class="svg"
  >
    <g class="g">
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: [Number, String],
      default: 14,
    },
    height: {
      type: [Number, String],
      default: 14,
    },
    iconColor: {
      type: String,
      default: "#fff",
    },
    viewBox: {
      type: [Number, String],
    },
  },
  data: () => ({}),
};
</script>

<style scoped>
.svg {
  display: inline-block;
  vertical-align: baseline;
  transition: fill ease 0.5s;
}
</style>
