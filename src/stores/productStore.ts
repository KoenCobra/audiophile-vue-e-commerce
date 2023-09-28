import { defineStore } from "pinia";
import { ref } from "vue";
import axios from 'axios'
import type { Product } from "@/types/product";

export const useProductStore = defineStore('product', () => {
 const products = ref<Product[]>([])

 const getProducts = async () => {
  products.value = (await axios.get('data.json')).data;
 }

 return { products, getProducts }
})