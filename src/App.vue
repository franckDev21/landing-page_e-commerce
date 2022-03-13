<script setup>
import Header from "./components/Header"
import { computed, ref } from "vue"
import { useStore } from "vuex"

const store = useStore()
const showCart = ref(false)
const qte = ref(0)
const qteCart = ref(0)
const currentProduct = computed(() => {
  return store.getters.currentProduct
})
const productsCart = computed(() => {
  return store.getters.productsCart
})
const productExist = (product) => {
  let index = productsCart.value.indexOf(product)
  return index !== -1;
}
const addToCart = () => {
  qteCart.value += qte.value
  if(!productExist(currentProduct.value)){
    store.dispatch('addToCart',currentProduct.value)
  }
}
const urlImg = ref(currentProduct.value.images[0])

const getUrl = value => urlImg.value = value
const increment = () => {
  qte.value++
}
const decrement = () => {
  if (qte.value === 0) return
  qte.value--
}


</script>

<template>

  <Header :showCart="showCart" :productsCart="productsCart" @show-cart="showCart = !showCart" :qte="qteCart" />

  <div class="product-card container">
    <div class="carousel">
      <div class="carousel__screen">
        <img :src="urlImg" alt="">
      </div>
      <div class="carousel__small-img">
        <div v-for="(img,i) in currentProduct.images" @click="getUrl(img)" class="img" :class="{active : img === urlImg}" :key="i"><img :src="img" alt=""></div>
      </div>
    </div>

    <div class="right">
      <div class="subtitle">sneaker company</div>
      <div class="title">{{currentProduct.name}}</div>
      <p>
        {{currentProduct.description}}
      </p>
      <div class="prices">
        <div class="price">
          <span class="total">${{ currentProduct.price }}.00</span>
          <span class="pourcent">{{currentProduct.pourcent}}%</span>
        </div>
        <div class="prev-price">${{ currentProduct.prev_price }}.00</div>
      </div>
      <div class="btns">
        <div class="qte">
          <span class="qte__prev" :class="{disabled : qte <= 0}" @click="decrement">
            <svg width="12" height="4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" id="a"/></defs><use fill="#FF7E1B" fill-rule="nonzero" xlink:href="#a"/></svg>
          </span>
          <span class="value">{{qte}}</span>
          <span class="qte__next" @click="increment">
            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" id="b"/></defs><use fill="#FF7E1B" fill-rule="nonzero" xlink:href="#b"/></svg>
          </span>
        </div>
        <button @click.prevent="addToCart" class="btn" :disabled="qte <= 0">
          <img src="./assets/images/icon-cart-w.svg" alt="">
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  </div>

</template>

<style lang="scss">
@import "assets/scss/main.scss";
</style>
