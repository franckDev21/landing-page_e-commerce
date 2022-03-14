import { createStore } from 'vuex'

export default createStore({
  state: {
    currentProduct : {
      id : 1,
      name : "fall limited edition sneakers",
      description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad amet aperiam beatae blanditiis dolore doloribus earum est, eveniet, facere iste laboriosam",
      price : 125.00,
      prev_price : 250.00,
      pourcent : 50,
      images : [
        require("../assets/images/image-product-1.jpg"),
        require("../assets/images/image-product-2.jpg"),
        require("../assets/images/image-product-3.jpg"),
        require("../assets/images/image-product-4.jpg"),
      ]
    },
    productsCart : []
  },
  getters : {
    currentProduct : state => state.currentProduct,
    productsCart : state => state.productsCart,
  },
  mutations: {
    ADD_TO_CART : (state,product) => state.productsCart.push(product),
    DELETE_TO_CART : (state,product) => {
      let index = state.productsCart.indexOf(product)
      if (index !== -1){
        state.productsCart.splice(index,1)
      }
    }
  },
  actions: {
    addToCart : ({commit},product) => commit('ADD_TO_CART',product),
    deleteToCart : ({commit},product) => commit('DELETE_TO_CART',product)
  },
  modules: {
  }
})
