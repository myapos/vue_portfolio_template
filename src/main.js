import { createApp } from "vue";
import mdiVue from "mdi-vue/v3";
import * as mdijs from "@mdi/js";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import "./assets/tailwind.css";

let app = createApp(App);

app.use(i18n);
app.use(store);
app.use(router);
app.use(mdiVue, {
  icons: mdijs,
});
app.mount("#app");
