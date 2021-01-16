<template>
  <auth>
    <form class="form" method="post" action="/confirm" @submit.prevent="confirm">
      <div class="form__body auth">
        <h3 class="form__title">Підтвердження ел. пошти</h3>
        <div class="auth__col">
          <input
            placeholder=" "
            class="auth__input auth__input--disabled"
            type="text"
            id="email"
            name="email"
            :value="emailMask()"
            disabled
          />
          <label unselectable="on" class="auth__label" for="email">Ел. пошта</label>
        </div>
        <div class="auth__col">
          <input
            placeholder=" "
            class="auth__input"
            :class="{ 'auth__input--error': $v.code.$error || error}"
            type="text"
            id="code"
            name="code"
            v-model.trim="code"
            @input="$v.code.$touch; error = false"
            @blur="$v.code.$touch"
          />
          <label unselectable="on" class="auth__label" for="code">Код підтвердження</label>
          <div
            class="auth__prompt auth__prompt--error"
            v-if="$v.code.$error || error"
          >
            Невірний код підтвердження 
          </div>
        </div>
        <div class="auth__col">
          <button 
            type="submit"
            class="auth__button"
            :class="{ 'auth__button--disabled': !code.length || error }"
            :disabled="!code.length || error"
            >
              Відновити
          </button>
        </div>
        <div class="auth__col auth__col--last">
          <p class="auth__hint">Код підтвердження відправлено. Отримати новий код можна через: 00:59</p>
        </div>
      </div>
      <div class="form__footer footer">
        <p class="footer__text">Не отримали код?</p>
        <p v-if="1" class="footer__text">Відправити код ще раз</p>
        <router-link v-else class="footer__link" to="/login">Відправити код ще раз</router-link>
      </div>
    </form>
  </auth>
</template>

<script>
import Auth from "./Auth";
import { required } from "vuelidate/lib/validators"

export default {
  components: {
    Auth,
  },
  name: "AuthConfirm",
  props: {},
  data: () => ({
    submitStatus: null,
    code: '',
    error: false,
    email: 'ip.ua97@gmail.com',
  }),
  computed: {},
  methods: {
    confirm() {
      this.$v.$touch()

      if(this.code.match(/^[0-9]{6,6}$/)) {
        this.error = false
      }
      else {
        this.error = true
      }

    },

    emailMask() {
      return this.email.replaceAll(/(?<=^[A-Za-z0-9]{2}).*?(?=@)/g, `***`).replaceAll(/(?<=\@).*?(?=\.)/g, `***`)
    }

  },
  validations: {
    code: {
      required,
    }
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

  &--disabled {
    background: #fff;
    color: #545454;
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

//Подсказки для ввостановления
.auth__hint {
  border: 1px solid $primary;
  border-radius: 4px;
  padding: 6px 10px;
  background: rgba($primary, 0.1);
  width: 100%;
  text-align: center;
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
  display: inline;
  font-size: 16px;
  line-height: 1em;
  transition: all .3s ease;
  
  &:hover {
    border-color: transparent;
  }
}
</style>