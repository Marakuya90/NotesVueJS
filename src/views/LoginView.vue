<template>
  <header>
    <router-link to="/"><img src="@/assets/logo.png" alt="logo" /></router-link>
    <router-link class='button' to="/register" >Регистрация</router-link>
  </header>
  <main>
    <img src="@/assets/notebook.png" alt="notebook"/>
    <form action="" @submit.prevent="login()">
      <input type="text" placeholder="Логин" v-model="user.login"/>
      <input type="password" placeholder="Пароль" v-model="user.password" />
      <button class="button btn-login">Войти</button>
    </form>
  </main>
</template>
  
<style scoped>

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0070c5;
  padding: 20px 50px;
}

header img {
  width: 150px;
}

header .button {
  padding: 5px 15px;
  border: 2px solid #ff6969;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #ff6969;
  background-color: transparent;
  text-decoration: none;
}
main {
  background-color: #00d98d;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 300px;
  padding: 50px;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ffd500;
  align-items: center;
  padding: 100px;
  gap: 40px;
}

input,
textarea {
  padding: 10px;
  border: 2px solid #00d98d;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
}

form .button,
form button {
  padding: 5px 15px;
  background: #ff6969;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #ffd500;
  border: none;
  text-decoration: none;
}
</style>
<script setup>
import router from "@/router";
import { ref } from "vue";

const user = ref({login: "", password:""});

async function login() {
    const data = JSON.stringify(user.value);
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    const HOST = "https://d5dgts1m3v0mqtfns7nj.apigw.yandexcloud.net/"
    let response = await fetch(HOST + 'login',{
      method:"POST",
      headers:headers,
      body:data
    });
    switch(response.status){
      case 200: {
        let result = await response.json();
        let token = result.token;
        localStorage.setItem('token', token);
        router.push("/");
        break;
      }
      case 403: {
        break;
      }
    }
    console.log(response);
  }
</script>
  