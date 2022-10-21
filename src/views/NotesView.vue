<template>
    <header>
        <img src="@/assets/logo.png" alt="logo">
        <a href="create.html" class="button btn-create"><img src="@/assets/btn-icon.png" alt="icon">Создать заметку</a>
        <a href="register.html" class="button">Выход</a>
    </header>
    <div class="notes">
        <div class="note">
            <div class="title">
                <img src="@/assets/cat1.jpg" alt="note">
                <h3>Заголовок</h3>
            </div>
            <p>Текст</p>
            <div class="buttons">
                <button class="trash"></button>
            </div>
        </div>
        <div class="note">
            <div class="title">
                <img src="@/assets/cat1.jpg" alt="note">
                <h3>Заголовок</h3>
            </div>
            <p>Текст</p>
            <div class="buttons">
                <button class="trash"></button>
            </div>
        </div>
        <div class="note">
            <div class="title">
                <img src="@/assets/cat1.jpg" alt="note">
                <h3>Заголовок</h3>
            </div>
            <p>Текст</p>
            <div class="buttons">
                <button class="trash"></button>
            </div>
        </div>
        <div class="note">
            <div class="title">
                <img src="@/assets/cat1.jpg" alt="note">
                <h3>Заголовок</h3>
            </div>
            <p>Текст</p>
            <div class="buttons">
                <button class="trash"></button>
            </div>
        </div>
        <div class="note">
            <div class="title">
                <img src="@/assets/cat1.jpg" alt="note">
                <h3>Заголовок</h3>
            </div>
            <p>Текст</p>
            <div class="buttons">
                <button class="trash"></button>
            </div>
        </div>
        <div class="note">
            <div class="title">
                <img src="@/assets/cat1.jpg" alt="note">
                <h3>Заголовок</h3>
            </div>
            <p>Текст</p>
            <div class="buttons">
                <button class="trash"></button>
            </div>
        </div>
        <div class="note">
            <div class="title">
                <img src="@/assets/cat1.jpg" alt="note">
                <h3>Заголовок</h3>
            </div>
            <p>Текст</p>
            <div class="buttons">
                <button class="trash"></button>
            </div>
        </div>
        <div class="note">
            <div class="title">
                <img src="@/assets/cat1.jpg" alt="note">
                <h3>Заголовок</h3>
            </div>
            <p>Текст</p>
            <div class="buttons">
                <button class="trash"></button>
            </div>
        </div>
        <div class="note">
            <div class="title">
                <img src="@/assets/cat1.jpg" alt="note">
                <h3>Заголовок</h3>
            </div>
            <p>Текст</p>
            <div class="buttons">
                <button class="trash"></button>
            </div>
        </div>
        <div class="note">
            <div class="title">
                <img src="@/assets/cat1.jpg" alt="note">
                <h3>Заголовок</h3>
            </div>
            <p>Текст</p>
            <div class="buttons">
                <button class="trash"></button>
            </div>
        </div>
    </div>
    <a href="create.html" class="add_note">+</a>
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

</style>
<script>

</script>