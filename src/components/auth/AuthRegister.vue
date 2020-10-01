<template>
  <auth>
    <form class="form" method="post">
      <div class="form__body">
        <h3 class="form__title">Реєстрація</h3>
        <div class="form__item">
          <input
            required
            placeholder=" "
            class="form__input"
            type="text"
            id="name"
            name="name"
          />
          <label class="form__label" for="name">Ім'я</label>
        </div>
        <div class="form__item">
          <input
            required
            placeholder=" "
            class="form__input"
            type="text"
            id="surname"
            name="surname"
          />
          <label class="form__label" for="surname">Прізвище</label>
        </div>
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
        <div class="form__item">
          <input
            required
            placeholder=" "
            class="form__input"
            type="password"
            id="password"
            name="password"
          />
          <label class="form__label" for="password">Пароль</label>
        </div>
        <div class="form__submit">
          <button type="submit" class="form__button">Зареєструватися</button>
          <span class="form__or">або</span>
          <a href="#" class="form__link">
            <img
              src="@/assets/image/icons/google.svg"
              alt=""
              class="form__elem"
            />
          </a>
          <a href="#" class="form__link">
            <img
              src="@/assets/image/icons/facebook.svg"
              alt=""
              class="form__elem"
            />
          </a>
        </div>
      </div>
      <div class="form__footer">
        <p class="form__text">У вас вже є акаунт?</p>
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
  name: "AuthRegister",
  props: {},
  data() {
    return {};
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.form {
  width: 100%;
  max-width: 550px;
  display: flex;
  flex-direction: column;
  &__body {
    padding: 25px 45px;
    background: #fff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  &__title {
    margin-bottom: 20px;
  }
  &__item {
    position: relative;
    margin-bottom: 18px;
  }
  &__label {
    @extend %label-auth;
  }
  &__input {
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
  &__icon {
    width: 20px;
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
  }
  &__submit {
    display: flex;
    align-items: center;
  }
  &__button {
    @extend %button-auth;
  }
  &__or {
    margin: 0 30px;
  }
  &__link {
    margin-right: 17px;
  }
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f1f1f1;
    padding: 15px 45px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    font-size: 16px;
    color: rgba(#000000, 0.5);
  }
  &__reg {
    @extend %link-auth;
  }
}
</style>