<script setup>
import Input_mail from './input_mail.vue'
import Input_pass from './input_pass.vue'




</script>
<template>
<form action="///api/v1/auth/signin">
  
    <div class="wrapper">
        <div class="header__container">
    <h1 class="header__title">Регистрация</h1>
    <p  class="heei__title">Заполните форму, чтобы создать аккаунт.</p>
    <hr>
    <div class="Form">
    <label for="login_form"><b>Электронный адрес</b></label>
    <Input_mail />
    <label for="psw"><b>Пароль</b></label>
   <Input_pass />

    <label for="psw-repeat"><b>Пароль еще раз</b></label>
    <Input_pass />
    <hr>
</div>
  
    <button class="btn_vhod" type="submit">Регистрация</button>
  
        </div>
  <div class="container signin">
    <p>Уже есть аккаунт? <a href="/login">Войти</a>.</p>
  </div>
</div>
</form>

</template>

<style scoped>

  
 
  </style>

