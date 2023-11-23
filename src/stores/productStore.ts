import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import type { Product } from '@/types/product'

export const useProductStore = defineStore('product', () => {
  const products = ref<Product[]>([])
  const product = ref<Product>()

  const getProducts = async () => {
    products.value = (await axios.get('/data.json')).data

    console.log(products.value)
  }

  const getProduct = async (id: number) => {
    product.value = products.value.find((p) => p.id === Number(id))
    console.log(product.value)
  }

  return { products, product, getProducts, getProduct }
})
