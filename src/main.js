import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

import firebase from "./firebaseConfig";
const db = firebase.firestore();



createApp(App)
  .use(router)
    .mount("#app");
  

db.collection('users').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        console.log(doc.data());
    })
})
console.log("hello");