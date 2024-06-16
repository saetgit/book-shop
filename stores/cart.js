import { defineStore } from 'pinia';
import { getBooks, postCart, deleteCart, getCart } from "~/api/appService";

export const useShoppingStore = defineStore('cart', {
  state: () => ({
    products: [],
    cartItems: [],
    isInitialized: false,
  }),

  getters: {
    countCartItems(state) {
      return state.cartItems.length;
    },
    getCartItems(state) {
      return state.cartItems;
    },
    totalCartPrice(state) {
      return state.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
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
          this.cartItems.splice(index, 1); // Use splice for reactivity
          console.log("remove");
        }
      }
    },

    async removeFromCart(item) {
      try {
        const response = await deleteCart(item.id);
        if (response.status === 200) {
          const index = this.cartItems.findIndex(product => product.id === item.id);
          if (index !== -1) {
            this.cartItems.splice(index, 1); // Use splice for reactivity
            console.log("remove");
          }
        } else {
          console.error('Error removing from cart:', response);
        }
      } catch (error) {
        console.error('Error removing from cart:', error);
      }
    },
    

    async loadCart() {
      try {
        const cart = await getCart();
        this.cartItems = Array.isArray(cart) ? cart : [];
        this.isInitialized = true;
      } catch (error) {
        console.error("Error loading cart:", error);
        this.cartItems = [];
      }
    },

    async loadProducts() {
      try {
        this.products = await getBooks();
      } catch (error) {
        console.error("Error loading products:", error);
      }
    },
  },
});
