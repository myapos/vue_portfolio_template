import { createStore } from "vuex";
import { ACTION_TYPES } from "./actionTypes";

export default createStore({
  state: {
    count: 0,
    articles: [],
    supportedThemes: ["dark", "light"],
    toggledTheme: false,
    activeTheme: "dark", // can be dark or light
    menuLinks: [],
    footerLinks: [],
  },
  mutations: {
    toggleTheme(state) {
      state.toggledTheme = !state.toggledTheme;
      if (state.toggledTheme) {
        state.activeTheme = state.supportedThemes[1];
      } else {
        state.activeTheme = state.supportedThemes[0];
      }
    },
  },
  actions: {
    toggleTheme({ commit }) {
      commit(ACTION_TYPES.TOGGLE_THEME);
    },
  },
  getters: {
    getActiveTheme: (state) => () => {
      return state.activeTheme;
    },
    getToggledTheme: (state) => () => {
      return state.toggledTheme;
    },
  },
  modules: {},
});
