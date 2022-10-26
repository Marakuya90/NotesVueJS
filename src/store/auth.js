import router from "@/router";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
    const token = ref();
    token.value = localStorage.getItem("token");

    async function login(user) {
        const data = JSON.stringify(user);
        const headers = new Headers();
        headers.append('Content-type', 'application/json');
        const HOST = process.env.VUE_APP_HOST;
        let response = await fetch(HOST + 'login', {
            method: "POST",
            headers: headers,
            body: data
        });
        switch (response.status) {
            case 200: {
                let result = await response.json();
                token.value = result.token;
                localStorage.setItem('token', token.value);
                router.push("/");
                break;
            }
            case 403: {
                break;
            }
        }
    }

    function logout(){
        token.value = null;
        localStorage.clear();
        router.push("/login");
      }
      return(token, login, logout);
});
