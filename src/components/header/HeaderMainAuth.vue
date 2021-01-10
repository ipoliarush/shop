<template>
  <div class="auth">
    <div class="auth__user">
      <icon-base width="17" height="17" icon-color="#2A2C30">
        <icon-user />
      </icon-base>
    </div>
    <div v-if="USER.name" class="auth__inner">
      <router-link to="/profile" class="auth__name">{{ USER.name }}</router-link>
    </div>
    <div v-else class="auth__inner">
      <router-link to="/login" class="auth__login">Вхід</router-link>
      <div class="auth__wline"></div>
      <router-link to="/register" class="auth__logout">Реєстрація</router-link>
    </div>
  </div>
</template>

<script>
import IconBase from "@/components/icons/IconBase";
import IconUser from "@/components/icons/IconUser";
import { mapGetters } from 'vuex'

export default {
  components: {
    IconBase,
    IconUser,
  },
  name: "HeaderMainAuth",
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters('auth', [
      'USER',
    ])
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.auth {
  display: flex;
  align-items: center;
  min-width: 125px;

  .auth__user {
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

  .auth__inner {
    display: flex;
    flex-direction: column;
    margin-left: 9px;
  }

  .auth__login,
  .auth__logout,
  .auth__name {
    text-decoration: none;
    color: rgba(#000000, 0.5);
    transition: color ease 0.5s;
    cursor: pointer;
    &:hover {
      color: $orange;
    }
  }

  .auth__wline {
    width: 100%;
    height: 1px;
    background: rgba(#3f4145, 0.2);
  }
}
</style>