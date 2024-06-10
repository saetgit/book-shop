import { defineStore } from 'pinia'

import db from '~/data/db.json'
export const useShoppingStore = defineStore('cart', {
  state: () => ({
    products: db.books,
    cartItems: [] 
  }),

  getters: {
    countCartItems() {
      return this.cartItems.length;
    },
    getCartItems() {
      return this.cartItems;
    }
  },
  actions: {
    addToCart(item) {
      let index = this.cartItems.findIndex(product => product.id === item.id);
      if (index !== -1) {
        this.cartItems[index].quantity += 1;
        console.log("addtocart");
      } else {
        if (item) {
          item.quantity = 1;
          this.cartItems.push(item);
          console.log("update");
        } else {
          console.error('Item is undefined');
        }
      }
    },
    incrementQ(item) {
      let index = this.cartItems.findIndex(product => product.id === item.id);
      if (index !== -1) {
        this.cartItems[index].quantity += 1;
        console.log("add");
      }
    },
    decrementQ(item) {
      let index = this.cartItems.findIndex(product => product.id === item.id);
      if (index !== -1) {
        this.cartItems[index].quantity -= 1;
        if (this.cartItems[index].quantity === 0) {
          this.cartItems = this.cartItems.filter(product => product.id !== item.id);
        }

        console.log("remove");
      }
    },
    removeFromCart(item) {
      this.cartItems = this.cartItems.filter(product => product.id !== item.id);
      console.log("remove");
    }

  },
})
