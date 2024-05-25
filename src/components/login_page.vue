<script setup>
import Btn from './btn.vue'
import Input_mail from './input_mail.vue'
import Input_pass from './input_pass.vue'
</script>


<template>

    <div class="wrapper">
        <header class="header">
            <div class="header__container">
                <h1 class="header__title">Добро пожаловать 👋</h1>
                <h2 class="heei__title">Сегодня новый день. Это твой день. Ты его формируешь. Войди, чтобы начать
                    управлять своими проектами.</h2>

                <div class="Form">
                    <div class="login_form">
                        <h5 class="login">Почта</h5>
                        <Input_mail />
                    </div>
                    <div class="password_form">
                        <h5 class="login">Пароль</h5>
                        <Input_pass />

                    </div>
                    <Btn />
                    <a class="password_help" href="/todo">Забыли пароль?</a>

                    <h4 class="reg">Ещё нет аккаунта? <a href="/signup">Зарегистрироваться</a></h4>
                </div>
            </div>
            <div class="image_box">
            <div class="header__image"><img src="./icons/Login Art.svg" alt=""></div>
            </div>
        </header>

    </div>

</template>
<style></style>