<template>
  <header>
    <router-link to="/"><img src="@/assets/logo.png" alt="logo" /></router-link>
    <router-link to="/new" class="button btn-create"
      ><img src="@/assets/btn-icon.png" alt="icon" />Создать заметку</router-link>
      <button class="button" @click = "logout()">Выход</button>
  </header>
  <main>
    <form action="" class="view_note">
      <button class="close_btn" type="button"></button>
      <div class="content">
        <img :src="note.image" alt="" />
        <h2>{{ note.title }}</h2>
        <p>{{ note.body }}</p>
      </div>
      <button class="trash"></button>
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

footer {
  box-sizing: border-box;
  background-color: #0070c5;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 50px;
}

footer h2 {
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  color: #ff6969;
  margin: 0;
}

/*Создание заметки*/
header .btn-create {
  background-color: #ff6969;
  color: #ffd500;
}

.btn-create img {
  width: 32px;
  margin-right: 10px;
}

.trash {
  width: 32px;
  height: 32px;
  background-image: url("@/assets/trash.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  border: none;
  background-color: transparent;
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
.view_note img {
  height: 200px;
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
}

.view_note .trash {
  align-self: flex-end;
}

.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.content img {
  align-self: center;
}
</style>
<script setup>
import { useAuthStore } from '@/store/auth';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

let route = useRoute();
const noteId = route.params.note;
const note = ref({title:"", body:"", image:""});

function logout(){
  const authStore = useAuthStore();
  authStore.logout();
}

async function getNote(){
  const authStore = useAuthStore();
  const token = authStore.token;
  const headers = new Headers()
  headers.append("Authorization", "Bearer " + token);
  const response = await fetch(process.env.VUE_APP_HOST + "notes/" + noteId, {
    headers:headers
  });
  if(response.status == 200){
    note.value = await response.json();
  }
}

onMounted(getNote);
</script>