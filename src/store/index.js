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
    activeLanguage: "gb",
    supportedLanguages: ["gb", "gr"], //! it can be anything from the supported languages that are mentioned in https://www.npmjs.com/package/vue-country-flag
    toggledLanguage: false,
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
        state.activeTheme = state.supportedLanguages[1];
        htmlClasses.remove("dark");
      } else {
        // enable dark theme
        state.activeTheme = state.supportedLanguages[0];
        htmlClasses.add("dark");
      }
    },
    initialiseStore(state) {
      const cachedProperty = localStorage.getItem(
        common.propertyKeyToLocalStore
      );

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
            item !== common.propertyKeyForLanguage &&
            item !== "loglevel:webpack-dev-server"
          ) {
            localStorage.removeItem(item);
          }
        });
      }

      // language caching
      const cachedLanguage = localStorage.getItem(
        common.propertyKeyForLanguage
      );

      const hasCachedLanguage =
        cachedLanguage &&
        cachedLanguage.length > 0 &&
        cachedLanguage === "true";
      if (hasCachedLanguage) {
        state[common.propertyKeyForLanguage] = JSON.parse(cachedLanguage);
        state.activeLanguage = state.supportedLanguages[1];
      }
    },
    toggleLanguage(state) {
      state.toggledLanguage = !state.toggledLanguage;
      if (state.toggledLanguage) {
        state.activeLanguage = state.supportedLanguages[1];
      } else {
        state.activeLanguage = state.supportedLanguages[0];
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
    toggleLanguage({ commit }) {
      commit(ACTION_TYPES.TOGGLE_LANGUAGE);
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
    getToggledLanguage: (state) => () => {
      return state[common.propertyKeyForLanguage];
    },
    getActiveLanguage: (state) => () => {
      return state.activeLanguage;
    },
  },
  modules: {},
});

store.subscribe((mutation, state) => {
  const cachedPropertyTheme = state[common.propertyKeyToLocalStore];
  const cachedPropertyLanguage = state[common.propertyKeyForLanguage];

  localStorage.setItem(
    common.propertyKeyToLocalStore,
    JSON.stringify(cachedPropertyTheme)
  );
  localStorage.setItem(
    common.propertyKeyForLanguage,
    JSON.stringify(cachedPropertyLanguage)
  );
});

export default store;
