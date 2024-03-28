import { defineStore } from "pinia";
import { persist } from "./constants";

interface UserState {
  login: boolean;
  user: any;
}

export const useAuthStore = defineStore("auth", {
  // state
  state: (): UserState => ({
    login: false,
    user: null,
  }),
  // getters
  getters: {
    // use to format state before return
    getLogin: (state: any) => state.login,
    getUser: (state: any) => state.user,
  },
  actions: {
    // save login status
    setLogin(value: boolean): void {
      this.login = value;
    },

    // save user info
    setUser(user: any): void {
      this.user = user;
    },

    // log out
    setLogout(): void {
      this.login = false;
      this.user = null;
    },
  },
  ...persist,
});
