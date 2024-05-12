// store/index.js
export const state = () => ({
    cart: []
  })
  
  export const mutations = {
    addToCart(state, product) {
      let productInCart = state.cart.find(item => item.id === product.id);
  
      if (productInCart) {
        productInCart.quantity += 1
      } else {
        state.cart.push({
          ...product,
          quantity: 1
        })
      }
    }
  }
  