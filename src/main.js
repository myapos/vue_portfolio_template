import { createApp } from "vue";
import mdiVue from "mdi-vue/v3";
import * as mdijs from "@mdi/js";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserSecret,
  faUsers,
  faHeadset,
  faHeart,
  faClock,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import "./assets/tailwind.css";

library.add(faUserSecret);
library.add(faUsers);
library.add(faHeadset);
library.add(faHeart);
library.add(faClock);
library.add(faArrowUp);

let app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(i18n);
app.use(store);
app.use(router);
app.use(mdiVue, {
  icons: mdijs,
});
app.mount("#app");
