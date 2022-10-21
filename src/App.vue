<template>
  <div class="wrapper">
    <router-view />
    <footer>
      <h2>Заметки</h2>
  </footer>
  </div>
</template>

<style>
#app {
  font-family: 'Roboto';

}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
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
</style>
