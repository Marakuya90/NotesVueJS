<template>
  <header>
    <img src="@/assets/logo.png" alt="logo" />
    <router-link to="/create" class="button btn-create"><img src="@/assets/btn-icon.png" alt="icon" />Создать заметку</router-link>
    <router-link to="/register" class="button">Выход</router-link>
  </header>
  <main>
    <form action="" class="new_note">
      <button class="close_btn" type="button"></button>
      <img src="@/assets/cat1.jpg" alt="cats" />
      <input type="text" placeholder="Заголовок заметки" />
      <textarea placeholder="Текст заметки"></textarea>
      <input type="text" placeholder="Ссылка на изображение" />
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
}

</style>
<script>
</script>