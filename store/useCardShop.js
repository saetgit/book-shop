import { defineStore } from 'pinia'

export const useCounterStore = defineStore('cart', {
  state: () => ({
    products:[
        {
            id:1,
            name:'ss',
            price:1200
        },
        {
            id:2,
            name:'ss',
            price:1200
        }
    ],
  }),
  getters:{

  },
  actions:{

  }
})