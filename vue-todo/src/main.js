import { createApp } from "vue";
import App from "./App.vue";
import { stroe } from "./store/store";

//createApp(App).mount("#app");

new Vue({
  el: "#app",
  stroe,
  render: (h) => h(App),
});
