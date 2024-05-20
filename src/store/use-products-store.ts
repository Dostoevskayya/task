import { defineStore } from "pinia"
import { ref } from "vue"

export const useProductsStore = defineStore(
  "products",
  () => {
    const productsList = ref<number[]>([])

    function setProductsList (id: number) {
      if (productsList.value.includes(id)) {
        return
      }

      productsList.value.push(id)
    }

    function deleteProduct (id: number) {
      if (!productsList.value.includes(id)) {
        return
      }

      productsList.value = productsList.value.filter((c) => c !== id)
    }

    function isProductInCart (id: number) {
      return productsList.value.includes(id)
    }

    function totalPrice (priceList: number[]) {
      return priceList.reduce((acc: number, curr: number) => acc + curr, 0)
    }

    return {
      productsList,
      setProductsList,
      deleteProduct,
      isProductInCart,
      totalPrice,
    }
  },
  {
    persist: true,
  }
)
