import type { CartItem } from '@/types/product'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useProductStore } from './productStore'

export const useCartStore = defineStore('cart', () => {
  const productStore = useProductStore()
  const cart = ref<CartItem[]>([])
  const cartItemQuantity = ref(1)
  const isCartVisible = ref(false)
  const cartTotal = ref(0)
  const currentCartItem = ref<CartItem>()
  const dialogVisible = ref(false)

  const addToCart = (cartItem: CartItem) => {
    currentCartItem.value = cart.value.find((item) => item.productID === cartItem.productID)
    cartTotal.value += cartItem.price

    if (currentCartItem.value) {
      currentCartItem.value.quantity += cartItem.quantity
      currentCartItem.value.price += cartItem.price
    } else {
      cart.value.push(cartItem)
    }

    localStorage.setItem('cartTotal', JSON.stringify(cartTotal.value))
    localStorage.setItem('cart', JSON.stringify(cart.value))
  }

  const decreaseQuantityFromCartItem = (cartItem: CartItem) => {
    currentCartItem.value = cart.value.find((item) => item.productID === cartItem.productID)
    if (currentCartItem.value === undefined) return

    const product = productStore.products.find((p) => p.id === cartItem.productID)

    currentCartItem.value.quantity--
    currentCartItem.value.price -= product?.price || 0
    cartTotal.value -= product?.price || 0

    if (currentCartItem.value.quantity === 0) {
      cart.value = cart.value.filter((item) => item.productID !== cartItem.productID)
    }

    localStorage.setItem('cartTotal', JSON.stringify(cartTotal.value))
    localStorage.setItem('cart', JSON.stringify(cart.value))
  }

  const increaseQuantityFromCartItem = (cartItem: CartItem) => {
    currentCartItem.value = cart.value.find((item) => item.productID === cartItem.productID)
    if (currentCartItem.value === undefined) return

    const product = productStore.products.find((p) => p.id === cartItem.productID)

    currentCartItem.value.quantity++
    currentCartItem.value.price += product?.price || 0
    cartTotal.value += product?.price || 0

    localStorage.setItem('cartTotal', JSON.stringify(cartTotal.value))
    localStorage.setItem('cart', JSON.stringify(cart.value))
  }

  const clearCart = () => {
    cart.value = []
    cartTotal.value = 0

    localStorage.setItem('cartTotal', JSON.stringify(cartTotal.value))
    localStorage.setItem('cart', JSON.stringify(cart.value))
  }

  return {
    cart,
    cartItemQuantity,
    isCartVisible,
    dialogVisible,
    cartTotal,
    addToCart,
    decreaseQuantityFromCartItem,
    increaseQuantityFromCartItem,
    clearCart
  }
})
