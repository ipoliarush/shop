<template>
  <div class="auth">
    <div class="auth__user">
      <font-awesome-icon :icon="['far', 'user']" class="auth__user--user" />
    </div>
    <div class="auth__inner">
      <router-link to="/login" class="auth__login">Вхід</router-link>
      <div class="auth__wline"></div>
      <router-link to="/register" class="auth__logout">Реєстрація</router-link>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "HeaderMainAuth",
  props: {},
  data() {
    return {};
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.auth {
  display: flex;
  align-items: center;

  &__user {
    width: 39px;
    height: 39px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f5f5f5;
    font-size: 16px;
    color: #000;
  }

  &__inner {
    display: flex;
    flex-direction: column;
    margin-left: 9px;
  }

  &__login,
  &__logout {
    text-decoration: none;
    color: rgba(#000000, 0.5);
    transition: color ease 0.5s;
    cursor: pointer;
    &:hover {
      color: $orange;
    }
  }

  &__wline {
    width: 100%;
    height: 1px;
    background: rgba(#3f4145, 0.2);
  }
}
</style>