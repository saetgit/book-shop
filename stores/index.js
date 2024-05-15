import { defineStore } from 'pinia'
import db from '~/public/books.json'
export const useShoppingStore = defineStore('cart', {
  state: () => ({
    products: db,
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
    // addToCart(item) {
    //   let index = this.cartItems.findIndex(product => product.id === item.id);
    //   if (index !== -1) {
    //     this.products[index].quantity += 1;
    //     alert("addtocart")
    //   } else {
    //     item.quantity = 1;
    //     this.cartItems.push(item);
    //     alert("update")
    //   }
    // },
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
        alert("addtocart")
      } else {
        if (item) {
          item.quantity = 1;
          this.cartItems.push(item);
          alert("update")
        } else {
          console.error('Item is undefined');
        }
      }
    },
    incrementQ(item) {
      let index = this.cartItems.findIndex(product => product.id === item.id);
      if (index !== -1) {
        this.cartItems[index].quantity += 1;
        alert("+add")
      }
    },
    decrementQ(item) {
      let index = this.cartItems.findIndex(product => product.id === item.id);
      if (index !== -1) {
        this.cartItems[index].quantity -= 1;
        if (this.cartItems[index].quantity === 0) {
          this.cartItems = this.cartItems.filter(product => product.id !== item.id);
        }

        alert("-remove")
      }
    },
    removeFromCart(item) {
      this.cartItems = this.cartItems.filter(product => product.id !== item.id);
      alert("remove")
    }

  },
})
