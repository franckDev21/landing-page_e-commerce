<script setup>
import {defineProps, ref} from "vue";
import Menu from "./Menu"

defineProps(['showCart','qte','productsCart'])

const showMenu = ref(false)

</script>

<template>
  <header class="header container">
    <div class="header__left">
      <Menu @open-menu="showMenu = !showMenu" />

      <div class="header__logo">sneakers</div>

      <!-- nav desktop -->
      <div class="nav nav--desktop hide-for-mobile">
        <a href="#">collections</a>
        <a href="#">Man</a>
        <a href="#" class="active">Women</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </div>
    <!-- nav mobile -->
    <div class="nav nav--mobile hide-for-desktop" v-if="showMenu === true">
      <svg @click="showMenu = false" class="close" width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd"/></svg>
      <div class="links">
        <a href="#">collections</a>
        <a href="#">Man</a>
        <a href="#" class="active">Women</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </div>

    <div class="header__right">
      <div class="header__cart" @click="$emit('show-cart')">
        <span v-if="qte > 0" class="count">{{qte}}</span>
        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero"/></svg>
      </div>
      <div class="header__cart-product" v-if="showCart">
        <div class="title">Cart</div>
        <div class="content">
          <span v-if="productsCart.length === 0">You cart is empty</span>
          <template v-if="productsCart.length > 0">
            <div class="img">
              <img :src="productsCart[0].images[0]" alt="">
            </div>
            <div>
              <h3>{{productsCart[0].name}}</h3>
              <p>${{productsCart[0].price}}.00 <span>X</span> {{qte}} &nbsp;<strong>${{productsCart[0].price * qte}}.00</strong></p>
              <svg @click="$emit('delete-to-cart',productsCart[0])" width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>
            </div>
          </template>
        </div>
        <div v-if="productsCart.length > 0" class="btn">Checkout</div>
      </div>
      <div class="header__avatar">
        <img src="../assets/images/image-avatar.png" alt="">
      </div>
    </div>
  </header>
</template>
