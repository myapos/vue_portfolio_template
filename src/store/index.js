import { createStore } from "vuex";
import { ACTION_TYPES } from "./actionTypes";
import * as common from "../shared/common";

const store = createStore({
  state: {
    count: 0,
    articles: [],
    supportedThemes: ["dark", "light"],
    toggledTheme: false,
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

      state.toggledTheme = !state.toggledTheme;

      if (state.toggledTheme) {
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

      const isCached =
        cachedProperty &&
        cachedProperty.length > 0 &&
        cachedProperty === "true";
      if (isCached) {
        state[common.propertyKeyToLocalStore] = JSON.parse(cachedProperty);
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
      return state.toggledTheme;
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
