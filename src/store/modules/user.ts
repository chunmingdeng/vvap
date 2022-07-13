import { defineStore } from 'pinia'

interface IUser {
  info: any;
  token: string | null;
}

export const useUserStore = defineStore({
  id: 'user-store',
  state: ():IUser => ({
    info: null,
    token: null,
  }),
  getters: {
    getInfo():any {
      return this.info;
    },
    getToken():string {
      return this.token ?? '';
    }
  },
  actions: {
    setInfo(info: any) {
      this.info = info;
    },
    setToken(token: string) {
      this.token = token;
    }
  },
  persist: {
    enabled: true, 
    strategies:[
      { storage: localStorage}
    ]
  },
})