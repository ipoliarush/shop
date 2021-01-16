<template>
  <auth>
    <form class="form" method="post" action="/recovery" @submit.prevent="recovery">
      <div class="form__body auth">
        <h3 class="form__title">Відновлення паролю</h3>
        <div class="auth__col">
          <input
            placeholder=" "
            class="auth__input"
            :class="{ 'auth__input--error': $v.email.$error }"
            type="email"
            id="email"
            name="email"
            v-model.trim="email"
            @input="$v.email.$touch"
            @blur="$v.email.$touch"
          />
          <label unselectable="on" class="auth__label" for="email">Ел. пошта</label>
          <div
            class="auth__prompt auth__prompt--error"
            v-if="$v.email.$error"
          >
            Введено неправильну адресу ел. пошти 
          </div>
        </div>
        <div class="auth__col auth__col--last">
          <button 
            type="submit" 
            class="auth__button"
            :class="{ 'auth__button--disabled': $v.$error }"
            :disabled="$v.$error"
            >
              Відновити
          </button>
        </div>
      </div>
      <div class="form__footer footer">
        <p class="forfooter__textm__text">Згадали свій пароль?</p>
        <router-link class="footer__link" to="/login">Увійти</router-link>
      </div>
    </form>
  </auth>
</template>

<script>
import Auth from "./Auth";

import { mapActions } from 'vuex'

import { required, minLength, maxLength, helpers } from "vuelidate/lib/validators"
const email = helpers.regex('email', /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/)


export default {
  components: {
    Auth,
  },
  name: "AuthRecovery",
  props: {},
  data: () => ({
    email: "",
  }),
  computed: {},
  methods: {
    ...mapActions('auth', [
      'RECOVERY',
    ]),

    recovery() {
      this.$v.$touch()

      if(!this.$v.$invalid) {

        const data = {
          email: this.email, 
        }

        this.RECOVERY(data)
        .then((resp) => {
          if(resp.data.success) {
            this.$router.push('/confirm')
          }
        })
        .catch(err => {
          console.log(err)
        })
      }
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

// Кнопка авторизации
.auth__button {
  width: 100%;
	border: none;
	border-radius: 4px;
	background: $primary;
	font-size: 18px;
	color: #fff;
	cursor: pointer;
	padding: 15px 0;
	transition: box-shadow ease .8s;

	&:hover {
    box-shadow: 0 0 15px $primary;
	}

  &--disabled {
    opacity: 0.5;
    cursor: initial;

    &:hover {
      box-shadow: none;
    }
  }
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
.footer__text {
  font-weight: 300;
  color: rgba($blue, 0.8);
  font-size: 16px;
  line-height: 1em;
}
.footer__link {
  font-weight: 300;
	color: rgba($blue, 0.8);
  text-decoration: none;
  border-bottom: 1px dashed rgba($blue, 0.8);
  display: inline;
  font-size: 16px;
  line-height: 1em;
  transition: all .3s ease;
  
  &:hover {
    border-color: transparent;
  }
}
</style>