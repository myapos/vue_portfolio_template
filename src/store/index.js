import { createStore } from "vuex";
import { ACTION_TYPES } from "./actionTypes";
import * as common from "../shared/common";

const store = createStore({
  state: {
    count: 0,
    articles: [],
    supportedThemes: ["dark", "light"],
    [common.propertyKeyToLocalStoreTheme]: false,
    activeTheme: "dark", // can be dark or light
    activeLanguage: "gb",
    supportedLanguages: ["gb", "gr"], //! it can be anything from the supported languages that are mentioned in https://www.npmjs.com/package/vue-country-flag
    [common.propertyKeyForLanguage]: false,
    menuLinks: [
      { target: "home", description: "Menu.Home" },
      { target: "about", description: "Menu.About" },
      { target: "services", description: "Menu.Services" },
      { target: "works", description: "Menu.Works" },
      { target: "team", description: "Menu.Team" },
      { target: "prices", description: "Menu.Prices" },
      { target: "contact", description: "Menu.Contact" },
    ],
    footerLinks: [],
  },
  mutations: {
    toggleTheme(state) {
      let htmlClasses = document.querySelector("html").classList;
      state[common.propertyKeyToLocalStoreTheme] =
        !state[common.propertyKeyToLocalStoreTheme];

      if (state[common.propertyKeyToLocalStoreTheme]) {
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
      const cachedTheme = localStorage.getItem(
        common.propertyKeyToLocalStoreTheme
      );

      const isCachedTheme =
        cachedTheme && cachedTheme.length > 0 && cachedTheme === "true";

      if (isCachedTheme) {
        state[common.propertyKeyToLocalStoreTheme] = JSON.parse(cachedTheme);

        state.activeTheme = "light";
      }
      //! check for previous versions and clear storage
      Object.keys(localStorage).forEach((item) => {
        const regexp = new RegExp(common.basePropertyKeyTheme, "ig");
        if (
          regexp &&
          item !== common.propertyKeyToLocalStoreTheme &&
          item !== common.propertyKeyForLanguage &&
          item !== "loglevel:webpack-dev-server"
        ) {
          localStorage.removeItem(item);
        }
      });

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
      state[common.propertyKeyForLanguage] =
        !state[common.propertyKeyForLanguage];
      if (state[common.propertyKeyForLanguage]) {
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
      return state[common.propertyKeyToLocalStoreTheme];
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
  const cachedThemeTheme = state[common.propertyKeyToLocalStoreTheme];
  const cachedThemeLanguage = state[common.propertyKeyForLanguage];

  localStorage.setItem(
    common.propertyKeyToLocalStoreTheme,
    JSON.stringify(cachedThemeTheme)
  );
  localStorage.setItem(
    common.propertyKeyForLanguage,
    JSON.stringify(cachedThemeLanguage)
  );
});

export default store;
