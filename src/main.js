import { createApp } from 'vue'
import App from './App.vue'

import firebase from "./firebaseConfig";
const db = firebase.firestore();

console.log(db)

createApp(App).mount('#app')
