<template>
  <auth>
    <form class="form" method="post" action="/recovery" @submit.prevent="recovery">
      <div class="form__body">
        <h3 class="form__title">Відновлення паролю</h3>
        <div class="form__item">
          <input
            placeholder=" "
            class="form__input"
            :class="{ 'form__input--error': $v.email.$error }"
            type="email"
            id="email"
            name="email"
            v-model.trim="email"
            @input="$v.email.$touch"
            @blur="$v.email.$touch"
          />
          <label unselectable="on" class="form__label" for="email">Ел. пошта</label>
          <div
            class="form__prompt form__prompt--error"
            v-if="$v.email.$error"
          >
            Введено неправильну адресу ел. пошти 
          </div>
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
import { required, minLength, maxLength, helpers } from "vuelidate/lib/validators"
const email = helpers.regex('email', /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/)


export default {
  components: {
    Auth,
  },
  name: "AuthRecovery",
  props: {},
  data: () => ({
    type: 'password',
    submitStatus: null,
    email: "",
  }),
  computed: {},
  methods: {
    recovery() {
      this.$v.$touch()
    },
  },
  validations: {
    email: {
      required,
      email,
      minLength: minLength(2),
      maxLength: maxLength(100),
    },
  },
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
    border-top-left-radius: 0;
  }

  @include respond-to('medium') {
    padding: 25px 45px;
    border-top-left-radius: 10px;
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

  -moz-user-select: -moz-none;
  -o-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}
.form__input {
  @extend %input-auth;

  &:not(:placeholder-shown) {
    & + .form__label {
      transform: translateY(-13px);
      font-size: 14px;
    }
  }
  &:focus {
    border-color: #80bdff;

    & + .form__label {
      transform: translateY(-13px);
      font-size: 14px;
      color: #80bdff;
    }
  }
  &--error {
    border-color: #db3445 !important;

    & + .form__label {
      color: #db3445 !important;
    }
  }
}
.form__prompt {
  color:  $blue;
  margin-top: 5px;

  &--error {
    color:  #db3445;
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
    border-bottom-left-radius: 0;
  }

  @include respond-to('medium') {
    padding: 25px 45px;
    border-bottom-left-radius: 10px;
  }
}
.form__reg {
  @extend %link-auth;
}
</style>