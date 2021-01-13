<template>
  <auth>
    <form class="form" method="post" action="/register" @submit.prevent="register">
      <div class="form__body auth">
        <h3 class="form__title">Реєстрація</h3>
        <div class="auth__col">
          <input
            placeholder=" "
            class="auth__input"
            :class="{ 'auth__input--error': $v.firstName.$error }"
            type="text"
            id="firstName"
            name="firstName"
            v-model.trim="firstName"
            @input="$v.firstName.$touch"
            @blur="$v.firstName.$touch"
          />
          <label unselectable="on" class="auth__label" for="firstName">Ім'я</label>
          <div
            class="auth__prompt auth__prompt--error"
            v-if="$v.firstName.$error"
          >
            Введіть своє ім'я на кирилиці
          </div>
        </div>
        <div class="auth__col">
          <input
            placeholder=" "
            class="auth__input"
            :class="{ 'auth__input--error': $v.phone.$error || existPhone }"
            type="tel"
            id="phone"
            name="phone"
            v-model.trim="phone"
            @input="$v.phone.$touch; existPhone = null"
            @blur="$v.phone.$touch"
          />
          <label unselectable="on" class="auth__label" for="phone">Телефон</label>
          <div
            class="auth__prompt auth__prompt--error"
            v-if="$v.phone.$error"
          >
            Введіть свій телефон у форматі +380 XX XXX XX XX 
          </div>
          <div
            class="auth__prompt auth__prompt--error"
            v-if="existPhone"
          >
            {{ messagePhone }}  
          </div>
        </div>
        <div class="auth__col">
          <input
            placeholder=" "
            class="auth__input"
            :class="{ 'auth__input--error': $v.email.$error || existEmail }"
            type="email"
            id="email"
            name="email"
            v-model.trim="email"
            @input="$v.email.$touch; existEmail = null"
            @blur="$v.email.$touch"
          />
          <label unselectable="on" class="auth__label" for="email">Ел. пошта</label>
          <div
            class="auth__prompt auth__prompt--error"
            v-if="$v.email.$error"
          >
            Введіть свою ел. пошту  
          </div>
          <div
            class="auth__prompt auth__prompt--error"
            v-if="existEmail"
          >
            {{ messageEmail }}  
          </div>
        </div>
        <div class="auth__col password">
          <input
            placeholder=" "
            class="auth__input password__input"
            :class="{ 'auth__input--error': $v.password.$error }"
            :type="type"
            id="password"
            name="password"
            v-model.trim="password"
            @input="$v.password.$touch"
            @blur="$v.password.$touch"
          />
          <label unselectable="on" class="auth__label" for="password">Пароль</label>
          <div @click="passwordHide" class="password__hide">
            <icon-base width="20" height="20">
              <icon-hide />
            </icon-base>
          </div>
          <div class="auth__prompt">
            Пароль має бути не менше 6 символів, має складатися з цифр і латинських літер, у тому числі заголовних
          </div>
        </div>
        <div class="auth__col">
          <button type="submit" class="auth__button">Зареєструватися</button>
        </div>
        <div class="auth__col">
          <div class="divided">
            <p class="divided__text">або за допомогою</p>
          </div>
        </div>
        <div class="auth__col auth__col--last">
          <div class="social">
            <a href="#" class="social__item">
              <icon-base viewBox="0 0 30 30" width="33" height="33">
                <icon-google-auth />
              </icon-base>
            </a>
            <a href="#" class="social__item">
              <icon-base viewBox="0 0 33 33" width="33" height="33">
                <icon-facebook-auth />
              </icon-base>
            </a>
          </div>
        </div>
      </div>
      <div class="form__footer footer">
        <p class="footer__text">У вас вже є акаунт?</p>
        <router-link class="footer__link" to="/login">
          Увійти
        </router-link>
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
            
            if (localStorage.getItem('token') != null) {
              if(this.$route.params.nextUrl != null) {
                this.$router.push(this.$route.params.nextUrl)
              } else {
                this.$router.push('/')
              }
            }
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

//Тело формы
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

//Заглавие формы
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

//Обертка строк
.auth__col {
  position: relative;
  margin-bottom: 18px;

  &--last {
    margin-bottom: 0;
  }
}

//Метки для полей
.auth__label {
  @extend %label-auth;

  -moz-user-select: -moz-none;
  -o-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}

//Поля
.auth__input {
  @extend %input-auth;

  &:not(:placeholder-shown) {
    & + .auth__label {
      transform: translateY(-13px);
      font-size: 14px;
    }
  }

  &:focus {
    border-color: #80bdff;

    & + .auth__label {
      transform: translateY(-13px);
      font-size: 14px;
      color: #80bdff;
    }
  }
  &--error {
    border-color: #db3445 !important;

    & + .auth__label {
      color: #db3445 !important;
    }
  }
}

//Подсказки и ошибки полей для ввода
.auth__prompt {
  color:  $blue;
  margin-top: 5px;

  &--error {
    color:  #db3445;
  }
}

//Поле с паролем
.password__input {
  padding-right: 55px;
}
.password__hide {
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

//Разделитель
.divided {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 1px;
    background: rgba($second, 0.2);
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  }
}
.divided__text {
  background: #fff;
  text-align: center;
  z-index: 20;
  padding: 1px 15px;
  width: auto;
}

// Авторизация с помощью соц сетей
.social {
  display: flex;
}
.social__item {
  background: rgba($second, 0.1);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 17px;
  padding: 10px 0;
  border-radius: 4px;

  &:last-child {
    margin-right: 0;
  }
}

// Кнопка авторизации
.auth__button {
  @extend %button-auth;
}

// Подвал формы
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
.footer {
  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
}
.footer__text {
  font-weight: 300;
  color: rgba($blue, 0.8);
  font-size: 16px;
  line-height: 1em;

  @media screen and (max-width: 400px) {
    margin-bottom: 10px;
  }
}
.footer__link {
  font-weight: 300;
	color: rgba($blue, 0.8);
  text-decoration: none;
  border-bottom: 1px dashed rgba($blue, 0.8);
  
  font-size: 16px;
  line-height: 1em;
  transition: all .3s ease;
  
  &:hover {
    border-color: transparent;
  }
}
</style>