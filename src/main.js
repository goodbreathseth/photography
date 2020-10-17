import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

import firebase from "./firebaseConfig";
const db = firebase.firestore();

console.log(db)

createApp(App)
  .use(router)
  .mount("#app");
