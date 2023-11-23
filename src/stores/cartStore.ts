import type { CartItem } from '@/types/product'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const cart = ref<CartItem[]>([])
  const cartItemQuantity = ref(1)
  const isCartVisible = ref(false)
  const cartTotal = ref(0)
  const currentCartItem = ref<CartItem>()

  const addToCart = (cartItem: CartItem) => {
    currentCartItem.value = cart.value.find((item) => item.productID === cartItem.productID)

    if (currentCartItem.value) {
      currentCartItem.value.quantity += cartItem.quantity
      currentCartItem.value.price += cartItem.price
    } else {
      cart.value.push(cartItem)
    }
  }

  const decreaseQuantityFromCartItem = (cartItem: CartItem) => {
    currentCartItem.value = cart.value.find((item) => item.productID === cartItem.productID)
    currentCartItem.value.quantity--
    if (currentCartItem.value.quantity === 0) {
      cart.value = cart.value.filter((item) => item.productID !== cartItem.productID)
    }
  }

  const clearCart = () => {
    cart.value = []
    cartTotal.value = 0
  }

  return {
    cart,
    cartItemQuantity,
    isCartVisible,
    cartTotal,
    addToCart,
    decreaseQuantityFromCartItem,
    clearCart
  }
})
