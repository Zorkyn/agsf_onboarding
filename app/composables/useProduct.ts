import type { Product } from "../types/product"

export const useProduct = (productId: number) => {
  const product = ref<Product | null>(null) // Reactive reference for the product data
  const isLoading = ref<boolean>(false) // Reactive reference to track loading state
  const error = ref<string | null>(null) // Reactive reference for error handling

  const fetchProduct = async () => {
    isLoading.value = true
    error.value = null
    function timeout(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms))
    }

    try {
      await timeout(2000)
      const { data, error: fetchError } = await useFetch<Product>(
        `/api/product/${productId}`
      )

      if (fetchError.value) {
        throw new Error(fetchError.value.message)
      }

      // Update the product reference with the fetched data
      product.value = data.value ?? null
    } catch (err) {
      error.value = (err as Error).message
    } finally {
      isLoading.value = false
    }
  }

  // Fetch the product immediately when the composable is called
  fetchProduct()

  // Return reactive references so they can be used in components
  return { product, isLoading, error, fetchProduct }
}
