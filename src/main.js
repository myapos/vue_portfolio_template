import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import i18n from "./i18n";

let app = createApp(App);

app.use(i18n);
app.use(store);
app.use(router);
app.mount("#app");
