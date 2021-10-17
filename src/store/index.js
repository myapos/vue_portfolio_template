import { createStore } from "vuex";
import { ACTION_TYPES } from "./actionTypes";
import * as common from "../shared/common";

const store = createStore({
  state: {
    count: 0,
    articles: [],
    supportedThemes: ["dark", "light"],
    [common.propertyKeyToLocalStore]: false,
    activeTheme: "dark", // can be dark or light
    menuLinks: [
      { target: "home", description: "Home" },
      { target: "about", description: "About" },
      { target: "services", description: "Services" },
      { target: "works", description: "Works" },
      { target: "team", description: "Team" },
      { target: "prices", description: "Prices" },
      { target: "contact", description: "Contact" },
    ],
    footerLinks: [],
  },
  mutations: {
    toggleTheme(state) {
      let htmlClasses = document.querySelector("html").classList;

      state[common.propertyKeyToLocalStore] =
        !state[common.propertyKeyToLocalStore];

      if (state[common.propertyKeyToLocalStore]) {
        // enable light theme
        state.activeTheme = state.supportedThemes[1];
        htmlClasses.remove("dark");
      } else {
        // enable dark theme
        state.activeTheme = state.supportedThemes[0];
        htmlClasses.add("dark");
      }
    },
    initialiseStore(state) {
      const cachedProperty = localStorage.getItem(
        common.propertyKeyToLocalStore
      );

      console.log("versioned", common.propertyKeyToLocalStore);
      const isCached =
        cachedProperty &&
        cachedProperty.length > 0 &&
        cachedProperty === "true";

      if (isCached) {
        state[common.propertyKeyToLocalStore] = JSON.parse(cachedProperty);
      }
      {
        //! check for previous versions and clear storage
        Object.keys(localStorage).forEach((item) => {
          const regexp = new RegExp(common.basePropertyKey, "ig");
          if (
            regexp &&
            item !== common.propertyKeyToLocalStore &&
            item !== "loglevel:webpack-dev-server"
          ) {
            localStorage.removeItem(item);
          }
        });
      }
    },
  },
  actions: {
    toggleTheme({ commit }) {
      commit(ACTION_TYPES.TOGGLE_THEME);
    },
    initialiseStore({ commit }) {
      commit(ACTION_TYPES.INITIALISE_STORE);
    },
  },
  getters: {
    getActiveTheme: (state) => () => {
      return state.activeTheme;
    },
    getToggledTheme: (state) => () => {
      return state[common.propertyKeyToLocalStore];
    },
    getMenuLinks: (state) => () => {
      return state.menuLinks;
    },
  },
  modules: {},
});

store.subscribe((mutation, state) => {
  const cachedProperty = state[common.propertyKeyToLocalStore];

  localStorage.setItem(
    common.propertyKeyToLocalStore,
    JSON.stringify(cachedProperty)
  );
});

export default store;
