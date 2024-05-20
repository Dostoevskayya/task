<template>
  <div>
    <v-progress-linear
      v-if="isLoading"
      height="6"
      indeterminate
      class="mb-5"
    ></v-progress-linear>
    <div class="mb-10" v-if="categories">
      <div class="d-flex">
        <h2 class="text-uppercase">{{ categories.name }}</h2>
      </div>
    </div>
    <div v-if="products">
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="3"
          v-for="(item, id) in products"
          :key="id"
          @click="handleProduct(item.id)"
          class="cursor-pointer"
        >
          <div class="d-flex flex-column">
            <v-img
              :src="item.imageUrl"
              :lazy-src="item.imageUrl"
              :alt="item.name"
              height="300"
            />
            <div class="d-flex flex-column align-start pa-3 w-100">
              <span class="text-left">{{ item.name }} </span>
              <span class="text-left pb-4 font-weight-bold"
                >{{ item.defaultDisplayedPriceFormatted }}
              </span>
            </div>
            <v-btn
              variant="outlined"
              class="rounded-0 w-100"
              @click.stop="handleClick(item.id)"
              :disabled="checkProductInCart(item.id)"
            >
              <div
                v-if="checkProductInCart(item.id)"
                class="d-flex flex-row align-center ga-2"
              >
                <span> in cart </span>
                <v-icon icon="mdi-check"></v-icon>
              </div>

              <span v-else>buy</span>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"
import getProducts from "../api/getProducts"
import getCategoryDetails from "../api/getCategoryDetails"
import { useProductsStore } from "../store/use-products-store"

import { useRoute, useRouter } from "vue-router"

const $productsStore = useProductsStore()

const router = useRouter()
const route = useRoute()

const categories = ref(null)
const products = ref(null)

const isLoading = ref(false)

async function fetchCategoryDetails () {
  try {
    isLoading.value = true

    const result = await getCategoryDetails(`${route.params["id"]}`)
    categories.value = result
  } finally {
    isLoading.value = false
  }
}

async function fetchProducts () {
  const result = await getProducts(`${route.params["id"]}`)
  products.value = result.items
}

function handleClick (id: number) {
  $productsStore.setProductsList(id)
}

async function handleProduct (id: number) {
  await router.push({ name: "product", params: { id } })
}

function checkProductInCart (id: number) {
  return $productsStore.isProductInCart(id)
}

onMounted(async () => {
  await fetchCategoryDetails()
  await fetchProducts()
})
</script>
