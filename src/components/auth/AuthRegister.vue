<template>
  <auth>
    <form class="form" method="post" action="/register" @submit.prevent="register">
      <div class="form__body">
        <h3 class="form__title">Реєстрація</h3>
        <div class="form__item">
          <input
            placeholder=" "
            class="form__input"
            :class="{ 'form__input--error': $v.firstName.$error }"
            type="text"
            id="firstName"
            name="firstName"
            v-model.trim="firstName"
            @input="$v.firstName.$touch"
            @blur="$v.firstName.$touch"
          />
          <label unselectable="on" class="form__label" for="firstName">Ім'я</label>
          <div
            class="form__prompt form__prompt--error"
            v-if="$v.firstName.$error"
          >
            Введіть своє ім'я на кирилиці
          </div>
        </div>
        <div class="form__item">
          <input
            placeholder=" "
            class="form__input"
            :class="{ 'form__input--error': $v.phone.$error || existPhone }"
            type="tel"
            id="phone"
            name="phone"
            v-model.trim="phone"
            @input="$v.phone.$touch; existPhone = null"
            @blur="$v.phone.$touch"
          />
          <label unselectable="on" class="form__label" for="phone">Телефон</label>
          <div
            class="form__prompt form__prompt--error"
            v-if="$v.phone.$error"
          >
            Введіть свій телефон у форматі +380 XX XXX XX XX 
          </div>
          <div
            class="form__prompt form__prompt--error"
            v-if="existPhone"
          >
            {{ messagePhone }}  
          </div>
        </div>
        <div class="form__item">
          <input
            placeholder=" "
            class="form__input"
            :class="{ 'form__input--error': $v.email.$error || existEmail }"
            type="email"
            id="email"
            name="email"
            v-model.trim="email"
            @input="$v.email.$touch; existEmail = null"
            @blur="$v.email.$touch"
          />
          <label unselectable="on" class="form__label" for="email">Ел. пошта</label>
          <div
            class="form__prompt form__prompt--error"
            v-if="$v.email.$error"
          >
            Введіть свою ел. пошту  
          </div>
          <div
            class="form__prompt form__prompt--error"
            v-if="existEmail"
          >
            {{ messageEmail }}  
          </div>
        </div>
        <div class="form__item">
          <input
            placeholder=" "
            class="form__input form__password"
            :class="{ 'form__input--error': $v.password.$error }"
            :type="type"
            id="password"
            name="password"
            v-model.trim="password"
            @input="$v.password.$touch"
            @blur="$v.password.$touch"
          />
          <label unselectable="on" class="form__label" for="password">Пароль</label>
          <div @click="passwordHide" class="form__password-hide">
            <icon-base width="20" height="20">
              <icon-hide />
            </icon-base>
          </div>
          <div class="form__prompt">
            Пароль має бути не менше 6 символів, має складатися з цифр і латинських літер, у тому числі заголовних
          </div>
        </div>
        <div class="form__submit">
          <button type="submit" class="form__button">Зареєструватися</button>
          <div class="form__wrap">
            <span class="form__or">або</span>
            <a href="#" class="form__link">
              <icon-base viewBox="0 0 30 30" width="33" height="33">
                <icon-google-auth />
              </icon-base>
            </a>
            <a href="#" class="form__link">
              <icon-base viewBox="0 0 33 33" width="33" height="33">
                <icon-facebook-auth />
              </icon-base>
            </a>
          </div>
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
import Auth from "./Auth"
import IconBase from "@/components/icons/IconBase"
import IconFacebookAuth from "@/components/icons/IconFacebookAuth"
import IconGoogleAuth from "@/components/icons/IconGoogleAuth"
import IconHide from "@/components/icons/IconHide"
import { required, minLength, maxLength, helpers } from "vuelidate/lib/validators"
import { mapActions } from 'vuex'
const alphaHelp = helpers.regex('alphaHelp', /^[а-яА-ЯіІїЇєЄ]*$/)
const phoneHelp = helpers.regex('phoneHelp', /^[\+]{0,1}380([0-9]{9})$/)
const emailHelp = helpers.regex('emailHelp', /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/)
const passwordHelp = helpers.regex('passwordHelp', /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]{6,}$/)

export default {
  components: {
    Auth,
    IconBase,
    IconFacebookAuth,
    IconGoogleAuth,
    IconHide,
  },
  name: "AuthRegister",
  props: {},
  data: () => ({
    type: 'password',
    submitStatus: null,
    firstName: "",
    phone: "",
    email: "",
    password: "",
    existEmail: false,
    existPhone: false,
    messageEmail: null,
    messagePhone: null
  }),
  computed: {},
  methods: {
    ...mapActions('auth', [
      'REGISTER',
    ]),

    register() {
      this.messageClear()
      this.$v.$touch()

      if(!this.$v.$invalid) {

        const data = {
          firstName: this.firstName,
          phone: this.phone, 
          email: this.email, 
          password: this.password
        }

        this.REGISTER(data)
          .then((resp) => {
            if(!resp.data.success) {
              if(resp.data.code === '2') {
                this.existEmail = true
                this.messageEmail = `Користувач з ел. поштою ${this.email} вже існує, введіть іншу`
              }
              else if(resp.data.code === '3') {
                this.existPhone = true
                this.messagePhone = `Користувач з телефоном ${this.phone} вже існує, введіть інший`
              }
            }
            else {
              this.messageClear()
              this.$router.push('/')
            }
          })
          .catch(err => console.log(err))
      }
    },

    messageClear() {
      this.existEmail = this.existPhone = false
      this.messageEmail = this.messagePhone = null
    },

    passwordHide() {
      if(this.type == 'password') this.type = 'text'
      else this.type ='password'
    }
  },
  validations: {
    firstName: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(60),
      alphaHelp
    },
    phone: {
      required,
      phoneHelp
    },
    email: {
      required,
      emailHelp,
      minLength: minLength(2),
      maxLength: maxLength(100),
    },
    password: {
      required,
      minLength: minLength(6),
      passwordHelp
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
.form__password {
  padding-right: 55px;
}
.form__password-hide {
  position: absolute;
  width: 56px;
  height: 56px;
  right: 0;
  top: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;

  .svg {
    fill: rgba($blue, 0.8);

    &:hover {
      fill: $orange;
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
  flex-direction: column;

  @media (min-width: 430px) {
    flex-direction: row;
    align-items: center;
  }
}
.form__button {
  @extend %button-auth;
  margin-bottom: 20px;
  max-width: 100%;

  @media (min-width: 430px) {
    margin-bottom: 0;
    max-width: 216px;
  }
}

.form__wrap {
  display: flex;
  align-items: center;
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