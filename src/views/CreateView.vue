<template>
  <header>
    <img src="@/assets/logo.png" alt="logo" />
    <router-link to="/new" class="button btn-create"><img src="@/assets/btn-icon.png" alt="icon"/>Создать заметку</router-link>
    <button class="button" @click = "logout()">Выход</button>
  </header>
  <main>
    <form action="" @submit.prevent="addNote()" class="new_note">
      <button class="close_btn" type="button" @click="closeNote()" ></button>
      <img :src="note.image" alt="image" v-if="note.image"/>
      <input type="text" placeholder="Заголовок заметки" v-model="note.title"/>
      <textarea placeholder="Текст заметки" v-model="note.body"></textarea>
      <input type="text" placeholder="Ссылка на изображение" v-model="note.image">/
      <div class="buttons">
        <button class="save_btn"></button>
      </div>
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
header .btn-create {
    background-color: #FF6969;
    color: #FFD500;
}

.btn-create img {
    width: 32px;
    margin-right: 10px;
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

.new_note,
.view_note {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  gap: 26px;
  width: 600px;
  box-sizing: border-box;
}

.new_note input,
.new_note textarea {
  width: 100%;
}
.new_note img,
.view_note img {
  height: 200px;
}

.save_btn {
  background-image: url("@/assets/save.png");
  width: 50px;
  height: 50px;
  background-color: transparent;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
}

.new_note .buttons {
  width: 100%;
  background-color: #00d98d;
  padding: 10px;
}

.close_btn {
  background-image: url("@/assets/close.svg");
  width: 32px;
  height: 32px;
  background-color: transparent;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  align-self: flex-end;
  cursor: pointer;
}

</style>
<script setup>

import router from '@/router';
import { useAuthStore } from '@/store/auth';
import { ref } from '@vue/reactivity'

router
const note = ref({title:"",body:"",image:""});

async function addNote() {
  const data = JSON.stringify(note.value);
  const token = localStorage.getItem('token');
  const headers = new Headers();
  headers.append("Authorization", "Bearer " + token);
  headers.append("Content-Type","application/json");
  let response = await fetch(process.env.VUE_APP_HOST + "/notes",{
    method:"POST",
    headers:headers,
    body:data
  });
if(response.status == 201){
  router.push("/");
}
else{
  console.log("Ошибка!");
}
console.log(response);
}

function closeNote(){
  router.push("/");
}

function logout(){
  const authStore = useAuthStore();
  authStore.logout();
}
</script>