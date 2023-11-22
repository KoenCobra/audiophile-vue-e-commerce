import type { CartItem } from '@/types/product'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const cart = ref<CartItem[]>([])
  const cartItemQuantity = ref(1)
  const isCartVisible = ref(false)
  const cartTotal = ref(0)

  const addToCart = (cartItem: CartItem) => {
    console.log(cartItem)
    console.log(cart.value)

    const cartItemToAdd = cart.value.filter((item) => item.id === cartItem.id)
    console.log(cartItemToAdd)

    if (cartItemToAdd) {
    }
    cart.value.push(cartItem)
    cartTotal.value += cartItem.price
  }

  const removeFromCart = (cartItem: CartItem) => {
    cart.value = cart.value.filter((item) => item !== cartItem)
    cartTotal.value -= cartItem.price
  }

  const clearCart = () => {
    cart.value = []
    cartTotal.value = 0
  }

  return { cart, cartItemQuantity, isCartVisible, cartTotal, addToCart, removeFromCart, clearCart }
})
