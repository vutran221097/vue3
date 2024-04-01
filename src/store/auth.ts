import { defineStore } from "pinia";
import { persist } from "./constants";

interface UserState {
  login: boolean;
  userUid: string;
  userInfo: any;
}

const initState = {
  login: false,
  userUid: "",
  userInfo: null,
};

export const useAuthStore = defineStore("auth", {
  // state
  state: (): UserState => initState,
  // getters
  getters: {
    // use to format state before return
  },
  actions: {
    // save login status
    setLogin(value: boolean): void {
      this.login = value;
    },

    // save user uid
    setUserUid(uid: string): void {
      this.userUid = uid;
    },

    // save user info
    setUser(user: any): void {
      this.userInfo = user;
    },

    // log out
    setLogout(): void {
      this.login = false;
      this.userUid = "";
      this.userInfo = null;
    },
  },
  ...persist,
});
