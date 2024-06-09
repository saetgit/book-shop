import { defineStore } from 'pinia';
import axios from 'axios';

export const useShoppingStore = defineStore('cart', {
  state: () => ({
    products: [],
    cartItems: []  // changed from cartItem to cartItems
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
    async fetchProducts() {
      try {
        const response = await axios.get('http://localhost:8000/books');
        this.products = response.data.books;  // Assuming the endpoint returns { books: [...] }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },

    addToCart(item) {
      // Check if the item exists in the products array
      let productExists = this.products.some(product => product.id === item.id);
      if (!productExists) {
        console.error('Item does not exist in products');
        return;
      }
    
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
  }
});
