<template>
  <header>
    <router-link to="/"><img src="@/assets/logo.png" alt="logo"></router-link>
    <router-link to="/new" class="button btn-create"><img src="@/assets/btn-icon.png" alt="icon">Создать заметку</router-link>
    <button to="/register" class="button">Выход</button>
</header>
<main>
    <form action="" class="view_note">
        <button class="close_btn" type="button"></button>
        <div class="content">
            <img src="@/assets/cat1.jpg" alt="">
            <h2>Заголовок заметки</h2>
            <p>Текст заметки</p>
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

/*Создание заметки*/
header .btn-create {
  background-color: #FF6969;
  color: #FFD500;
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
<script>
</script>