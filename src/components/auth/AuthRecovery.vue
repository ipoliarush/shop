<template>
  <auth>
    <form class="form" method="post">
      <div class="form__body">
        <h3 class="form__title">Відновлення паролю</h3>
        <div class="form__item">
          <input
            required
            placeholder=" "
            class="form__input"
            type="email"
            id="email"
            name="email"
          />
          <label class="form__label" for="email">E-mail</label>
        </div>
        <div class="form__item"></div>
        <div class="form__submit">
          <button type="submit" class="form__button">Відновити</button>
        </div>
      </div>
      <div class="form__footer">
        <p class="form__text">Згадали свій пароль?</p>
        <router-link class="form__reg" to="/login">Увійти</router-link>
      </div>
    </form>
  </auth>
</template>

<script>
import Auth from "./Auth";
export default {
  components: {
    Auth,
  },
  name: "AuthRecovery",
  props: {},
  data: () => ({}),
  computed: {},
};
</script>

<style lang="scss" scoped>
.form {
  width: 100%;
  display: flex;
  flex-direction: column;

  @include respond-to('small') {
    width: 50%;
  }

  @include respond-to('medium') {
    width: 100%;
    max-width: 550px;
  }
}

.form__body {
  padding: 25px 10px;
  background: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  @include respond-to('small') {
    padding: 25px 20px;
  }

  @include respond-to('medium') {
    padding: 25px 45px;
  }
}
.form__title {
  margin-bottom: 15px;
  font-size: 24px;
  font-weight: 400;

  @include respond-to('small') {
    margin-bottom: 20px;
  }

  @include respond-to('medium') {
    font-size: 30px;
  }
}
.form__item {
  position: relative;
  margin-bottom: 18px;
}
.form__label {
  @extend %label-auth;
}
.form__input {
  @extend %input-auth;
  &:not(:placeholder-shown) {
    & + .form__label {
      transform: translateY(-13px);
    }
  }
  &:focus {
    & + .form__label {
      transform: translateY(-13px);
    }
  }
}
.form__icon {
  width: 20px;
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
}
.form__submit {
  display: flex;
  align-items: center;
}
.form__button {
  @extend %button-auth;
}
.form__or {
  margin: 0 30px;
}
.form__link {
  display: flex;
  margin-right: 17px;

  &:last-child {
    margin-right: 0;
  }
}
.form__recovery {
  @extend %link-auth;
  margin-top: 20px;
  display: inline-block;
}
.form__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f1f1f1;
  padding: 15px 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  font-size: 16px;
  color: rgba(#000000, 0.5);

  @include respond-to('small') {
    padding: 15px 20px;
  }

  @include respond-to('medium') {
    padding: 25px 45px;
  }
}
.form__reg {
  @extend %link-auth;
}
</style>