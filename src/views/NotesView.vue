<template>
  <header>
    <router-link to="/"><img src="@/assets/logo.png" alt="logo"></router-link>
    <router-link to="/new" class="button btn-create"
      ><img src="@/assets/btn-icon.png" alt="icon" />Создать
      заметку</router-link
    >
    <router-link to="/register" class="button">Выход</router-link>
  </header>
  <div class="notes">
    <div class="note" v-for="note in notes" :key="note.id">
      <div class="title">
        <img :src="note.image" alt="note" />
        <h3>{{ note.title }}</h3>
      </div>
      <p>{{ note.body }}</p>
      <div class="buttons">
        <button class="trash"></button>
      </div>
    </div>
  </div>
  <router-link to="/new" class="add_note">+</router-link>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0070C5;
  padding: 20px 50px;
}

header img {
  width: 150px;
}

header .button {
  padding: 5px 15px;
  border: 2px solid #FF6969;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #FF6969;
  background-color: transparent;
  text-decoration: none;
}

main {
  background-color: #00D98D;
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
  background: #FFD500;
  align-items: center;
  padding: 100px;
  gap: 40px;
}

input,
textarea {
  padding: 10px;
  border: 2px solid #00D98D;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
}

form .button,
form button {
  padding: 5px 15px;
  background: #FF6969;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #FFD500;
  border: none;
  text-decoration: none;
}

footer {
  box-sizing: border-box;
  background-color: #0070C5;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 50px;
}

footer h2 {
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  color: #FF6969;
  margin: 0;
}

header .btn-create {
  background-color: #FF6969;
  color: #FFD500;
}

.btn-create img {
  width: 32px;
  margin-right: 10px;
}

.notes {
  background-color: #00D98D;
  flex: 1;
  padding: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 50px;
  row-gap: 50px;
}

.note {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  background-color: #FFD500;
  padding: 20px;
  box-shadow: 5px 5px 5px #000000;
}

.note:nth-child(odd) {
  transform: rotate(-5deg);
}

.note:nth-child(4n+2) {
  transform: rotate(4deg);
}

.note:nth-child(4n) {
  transform: rotate(3deg);
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title img {
  width: 53px;
}

.title h3 {
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
}

.note p {
  flex: 1;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
}

.buttons {
  display: flex;
  flex-direction: row-reverse;
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
.buttons {
  width: 100%;
  background-color: #00D98D;
  padding: 10px;
}

.trash {
  align-self: flex-end;
}

.add_note{
  display: none;
}

</style>
<script setup>
import { onMounted, ref } from 'vue';
const notes = ref();
async function getNotes(){
  const token = localStorage.getItem("token");
  const host = "https://d5dgts1m3v0mqtfns7nj.apigw.yandexcloud.net/";
  let headers = new Headers();
  headers.append("Authorization", "Bearer " + token);
  let response = await fetch(host + "notes", {
    headers: headers
  });
  if(response.status == "200"){
    notes.value = await response.json();
    console.log(notes.value);
  }
}

onMounted(getNotes)
</script>