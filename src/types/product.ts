export interface Product {
  id: number
  slug: string
  name: string
  image: Device
  category: string
  categoryImage: Device
  new: boolean
  price: number
  description: string
  features: string
  includes: Include[]
  gallery: Gallery
  others: Other[]
}

export interface CartItem {
  productID: number
  productImage: string
  productName: string
  quantity: number
  price: number
}

export interface Device {
  mobile: string
  tablet: string
  desktop: string
}

export interface Include {
  quantity: number
  item: string
}

export interface Gallery {
  first: Device
  second: Device
  third: Device
}

export interface Other {
  slug: string
  name: string
  image: Device
}
