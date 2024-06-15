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
      this.cartItems = this.cartItems.filter(product => product.id !== item.id);
      console.log("remove");
      await deleteCart(item);
    },

    // async saveCart() {
    //   console.log("---------------Cart saved");
    //   await this.saveCartItems(); // Ensure to await the saving of cart items
    // },

    // async saveCartItems() {
    //   try {
    //     const response = await postCart(this.cartItems); // Pass this.cartItems to postCart function
    //     if (response && response.data) {
    //       // Assuming response.data is the updated cart items data
    //       this.cartItems = response.data; // Update local cart items with response data
    //       console.log("Cart items updated:", this.cartItems);
    //     } else {
    //       console.error("Invalid response format:", response);
    //     }
    //   } catch (error) {
    //     console.error("Error saving cart items:", error);
    //   }
    // },

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