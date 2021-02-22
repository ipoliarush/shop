<template>
  <auth>
    <form class="form" method="post" action="/confirm" @submit.prevent="confirm">
      <div class="form__body auth">
        <h3 class="form__title">Підтвердження ел. пошти</h3>
      </div>
      <div class="form__footer footer">
        <p class="footer__text">Не отримали код?</p>
        <p v-if="0" class="footer__text">Відправити код ще раз</p>
        <router-link v-else class="footer__link" to="/login">Відправити код ще раз</router-link>
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
  name: "AuthVerify",
  props: {},
  data: () => ({}),
  computed: {},
  methods: {},
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