import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import type { Product } from '@/types/product'

export const useProductStore = defineStore('product', () => {
  const products = ref<Product[]>([])
  const product = ref<Product>()
  const navbarClass = ref('')

  const getProducts = async () => {
    products.value = (await axios.get('/data.json')).data
  }

  const getProduct = async (id: number) => {
    product.value = products.value.find((p) => p.id === Number(id))
  }

  return { products, product, navbarClass, getProducts, getProduct }
})
