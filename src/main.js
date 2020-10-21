import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

import googleMap from "googlemaps-vue3";
const googleMapOption = {
  apiKey: "AIzaSyDu5jAc8P-AltWINmsSQxtBdfK0Y2XCATw",
  tileUrl: "https://www.sethhinton.com", //example: https://cdn.lima-labs.com/{z}/{x}/{y}.png?free
  layerId: "my-layer-id",
};
const app = createApp(App);
app.use(router);
app.use(googleMap, googleMapOption);
app.mount("#app");


// createApp(App)
//   .use(router)
//     .mount("#app");