<template>
  <div id="app">
    <s-header />
    <s-main />
  </div>
</template>

<script>
import sMain from "@/components/s-main";
import sHeader from "@/components/header/s-header";

export default {
  name: "App",
  components: {
    sMain,
    sHeader,
  },
};
</script>

<style lang="scss">
#app {
}
</style>
