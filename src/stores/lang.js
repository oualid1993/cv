import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useLangStore = defineStore("lang", {
  state: () => ({
    /* 0 for the english language
       1 for the french language
       2 for the arab language */
    pageLang: 0,
  }),
  getters: {
    getLang: (state) => state.pageLang,
  },
  actions: {
    setLang(langSelected) {
      this.pageLang = langSelected;
    },
  },
});
