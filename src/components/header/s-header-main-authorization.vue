<template>
  <div class="authorization">
    <div class="authorization__user">
      <font-awesome-icon
        :icon="['far', 'user']"
        class="authorization__user--user"
      />
    </div>
    <div class="authorization__inner">
      <router-link to="/login" class="authorization__login">Вхід</router-link>
      <div class="authorization__wline"></div>
      <router-link to="/logout" class="authorization__logout"
        >Реєстрація</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "s-header-main-authorization",
  props: {},
  data() {
    return {};
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.authorization {
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