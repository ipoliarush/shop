<template >
  <div class="profile">
    <div class="layout">
      <div @click="logout">Выйти</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  components: {},
  name: "AuthProfile",
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    ...mapActions('auth', [
      'LOGOUT'
    ]),

    logout() {
      this.LOGOUT()
      .then(() => {
        this.$router.push('/')
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.profile {
  
}
</style>