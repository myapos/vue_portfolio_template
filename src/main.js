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
  faMobileAlt,
  faChartPie,
  faCloud,
  faPencilAlt,
  faLeaf,
  faTrophy,
  faCoffee,
  faMale,
  faFemale,
  faPlug,
  faCog,
  faStar,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import "./assets/tailwind.css";
import "./assets/global.css";

library.add(faUserSecret);
library.add(faUsers);
library.add(faHeadset);
library.add(faHeart);
library.add(faClock);
library.add(faArrowUp);
library.add(faMobileAlt);
library.add(faChartPie);
library.add(faCloud);
library.add(faPencilAlt);
library.add(faLeaf);
library.add(faTrophy);
library.add(faCoffee);
library.add(faMale);
library.add(faFemale);
library.add(faPlug);
library.add(faCog);
library.add(faStar);
library.add(faPlus);

let app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(i18n);
app.use(store);
app.use(router);
app.use(mdiVue, {
  icons: mdijs,
});
app.mount("#app");
