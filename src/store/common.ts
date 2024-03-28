import { defineStore } from "pinia";

export const useCommonStore = defineStore("common", {
  // state
  state: () => ({
    bookCase: [] as any,
    bookMark: [] as any,
  }),

  // getters
  getters: {
    getBookCase: (state) => state.bookCase,
    getBookMark: (state) => state.bookMark,
  },

  actions: {
    setBookCase(value: any) {
      this.bookCase = value;
    },

    setBookMark(value: any) {
      this.bookMark = value;
    },
  },
});
