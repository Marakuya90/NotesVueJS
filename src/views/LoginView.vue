<template>
    <header>
        <img src="@/assets/logo.png" alt="logo">
        <a href="register.html" class="button">Регистрация</a>
    </header>
    <main>
        <img src="@/assets/notebook.png" alt="notebook">
        <form action="">
            <input type="text" placeholder="Логин">
            <input type="password" placeholder="Пароль">
            <a href="notes.html" class="button btn-login">Войти</a>
        </form>
    </main>
  </template>
  
<style scoped>
/*Шапка*/
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
</style>

  <script>
  
  </script>
  