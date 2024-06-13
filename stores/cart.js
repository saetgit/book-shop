import { defineStore } from 'pinia';
import db from '~/data/db.json';
import { getCart } from "~/api/appService";

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
      await this.saveCart();
    },

    async incrementQ(item) {
      const index = this.cartItems.findIndex(product => product.id === item.id);
      if (index !== -1) {
        this.cartItems[index].quantity += 1;
        console.log("add");
        await this.saveCart();
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
        await this.saveCart();
      }
    },

    async removeFromCart(item) {
      this.cartItems = this.cartItems.filter(product => product.id !== item.id);
      console.log("remove");
      await this.saveCart();
    },

    async saveCart() {
      console.log("Cart saved");
    },

    async loadCart() {
      try {
        const response = await getCart(); // Await the axios promise directly
        this.cartItems = response.data; // Assuming response.data contains your cart items
        this.isInitialized = true;
      } catch (error) {
        console.error("Error loading cart:", error);
        // Handle error as needed (e.g., set a flag, show a message)
      }
    },
  },
});
