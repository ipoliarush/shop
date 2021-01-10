<template>
  <auth>
    <form class="form" method="post" action="/login" @submit.prevent="login">
      <div class="form__body">
        <h3 class="form__title">Вхід</h3>
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
            Введено неправильну адресу ел. пошти 
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
            :class="{ 'form__input--error': $v.password.$error || existPass }"
            :type="type"
            id="password"
            name="password"
            v-model.trim="password"
            @input="$v.password.$touch; existPass = null"
            @blur="$v.password.$touch"
          />
          <label unselectable="on" class="form__label" for="password">Пароль</label>
          <div @click="passwordHide" class="form__password-hide">
            <icon-base width="20" height="20">
              <icon-hide />
            </icon-base>
          </div>
          <div 
            class="form__prompt form__prompt--error"
            v-if="$v.password.$error"
          >
            Введіть свій пароль
          </div>
          <div
            class="form__prompt form__prompt--error"
            v-if="existPass"
          >
            {{ messagePass }}  
          </div>
        </div>
        <div class="form__submit">
          <button type="submit" class="form__button">Увійти</button>
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
        <router-link class="form__recovery" to="/recovery">
          Нагадати пароль
        </router-link>
      </div>
      <div class="form__footer">
        <p class="form__text">У вас ще немає акаунту?</p>
        <router-link class="form__reg" to="/register">
          Зареєструватися
        </router-link>
      </div>
    </form>
  </auth>
</template>


<script>
import Auth from "./Auth";
import IconBase from "@/components/icons/IconBase";
import IconFacebookAuth from "@/components/icons/IconFacebookAuth";
import IconGoogleAuth from "@/components/icons/IconGoogleAuth";
import IconHide from "@/components/icons/IconHide"
import { required, minLength, maxLength, helpers } from "vuelidate/lib/validators"
import { mapActions } from 'vuex'
const email = helpers.regex('email', /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/)

export default {
  components: {
    Auth,
    IconBase,
    IconFacebookAuth,
    IconGoogleAuth,
    IconHide,
  },
  name: "AuthLogin",
  props: {},
  data: () => ({
    type: 'password',
    submitStatus: null,
    email: "",
    password: "",
    existEmail: false,
    existPass: false,
    messageEmail: null,
    messagePass: null
  }),
  methods: {
    ...mapActions('auth', [
      'LOGIN',
    ]),
    
    login() {
      this.messageClear()
      this.$v.$touch()

      if(!this.$v.$invalid) {

        const data = {
          email: this.email, 
          password: this.password
        }

        this.LOGIN(data)
        .then((resp) => {
          if(!resp.data.success) {
            if(resp.data.code === '6') {
              this.existEmail = true
              this.messageEmail = `Користувач з ел. поштою ${this.email} не зареєстрований`
            } else if(resp.data.code === '7') {
              this.existPass = true
              this.messagePass = `Введено невірний пароль! Перевірте розкладку клавіатури і Caps Lock`
            }
          } else {
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
      this.existEmail = this.existPass = false
      this.messageEmail = this.messagePass = null
    },
    passwordHide() {
      if(this.type == 'password') this.type = 'text'
      else this.type ='password'
    }
  },
  validations: {
    email: {
      required,
      email,
      maxLength: maxLength(100),
    },
    password: {
      required,
      minLength: minLength(2),
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