import type { Product } from "../../../app/types/product"

export default defineEventHandler((event) => {
  const productID: number = Number(event.context.params?.slug)
  console.log("productID=" + productID)
  const product: Product = {
    id: NaN,
    name: "",
    price: NaN,
    description: "",
  }

  switch (productID) {
    case 1:
      product.id = 1
      product.name = "Product 1"
      product.price = 55.15
      product.description = "product 1 description"
      break
    case 2:
      product.id = 2
      product.name = "Product 2"
      product.price = 95.15
      product.description = "product 2 description"
      break
    default:
      break
  }

  return product
})
