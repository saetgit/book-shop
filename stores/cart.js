import { defineStore } from 'pinia';
import db from '~/data/db.json';
import { postCart,deleteCart } from "~/api/appService";

export const useShoppingStore = defineStore('cart', {
  state: () => ({
    products: db.books,
    cartItems: [],
    isInitialized: false,
  }),

  getters: {
    countCartItems() {
      return this.cartItems.length;
    },
    getCartItems() {
      return this.cartItems;
    },
  },

  actions: {
    async addToCart(item) {
     await postCart(item);

      const index = this.cartItems.findIndex(product => product.id === item.id);
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

    async incrementQ(item) {
      const index = this.cartItems.findIndex(product => product.id === item.id);
      if (index !== -1) {
        this.cartItems[index].quantity += 1;
        console.log("add");
      }
    },

    async decrementQ(item) {
      const index = this.cartItems.findIndex(product => product.id === item.id);
      if (index !== -1) {
        this.cartItems[index].quantity -= 1;
        if (this.cartItems[index].quantity === 0) {
          this.cartItems = this.cartItems.filter(product => product.id !== item.id);
        }
        console.log("remove");

      }
    },

    async removeFromCart(item) {
      try {
        const response = await deleteCart(item.id);
        if (response.status === 200) {
          this.cartItems = this.cartItems.filter(product => product.id !== item.id);
          console.log("remove");
        } else {
          console.error('Error removing from cart:', response);
        }
      } catch (error) {
        console.error('Error removing from cart:', error);
      }
    },
    
    async loadCart() {
      try {
        this.cartItems = db.cart || []; // Load initial cart items from db
        this.isInitialized = true;
      } catch (error) {
        console.error("Error loading cart:", error);
        // Handle error as needed (e.g., set a flag, show a message)
      }
    },
  },
});