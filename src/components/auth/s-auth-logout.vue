<template>
  <s-auth>
    <div class="auth-logout">
      <h2>Реєстрація</h2>
    </div>
  </s-auth>
</template>

<script>
import sAuth from "./s-auth";
export default {
  components: {
    sAuth,
  },
  name: "s-auth-logout",
  props: {},
  data() {
    return {};
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.auth-logout {
}
</style>