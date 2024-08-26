// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-vuefire"]



  vuefire: {
    config: {
      apiKey: "AIzaSyA_ouM0R8J6GsT-ft1f0yKu7zSZ3L_t38Y",
      authDomain: "dev-mint-coa-webpage.firebaseapp.com",
      databaseURL: "https://dev-mint-coa-webpage-default-rtdb.firebaseio.com",
      projectId: "dev-mint-coa-webpage",
      storageBucket: "dev-mint-coa-webpage.appspot.com",
      messagingSenderId: "551453836621",
      appId: "1:551453836621:web:6088422378a20ba9b06304"
    },
  },
})
