<template>
  <div v-if="categories">
    <div class="mb-10">
      <v-row class="my-10">
        <v-col
          cols="12"
          sm="2"
          md="2"
          v-for="(item, id) in categories"
          :key="id"
          @click="handleCategory(item.id)"
          class="cursor-pointer"
        >
          <div class="d-flex flex-column align-center">
            <v-avatar size="80">
              <v-img
                :src="item.hdThumbnailUrl"
                :lazy-src="item.hdThumbnailUrl"
                :alt="item.name"
                style="max-width: 100px"
              />
            </v-avatar>
            <span class="pt-2">{{ item.name }}</span>
          </div>
        </v-col>
      </v-row>
    </div>
    <div v-if="products">
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="3"
          v-for="(item, id) in products"
          :key="id"
          class="cursor-pointer"
          @click="handleProduct(item.id)"
        >
          <div class="d-flex flex-column">
            <v-img
              :lazy-src="item.imageUrl"
              :src="item.imageUrl"
              height="300"
              :alt="item.name"
            />
            <div class="d-flex flex-column align-start pa-3 w-100">
              <span class="text-left">{{ item.name }} </span>
              <span class="text-left pb-4 font-weight-bold"
                >{{ item.defaultDisplayedPriceFormatted }}
              </span>
            </div>
            <div>
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
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"
import getCategories from "../api/getCategories"
import getProducts from "../api/getProducts"
import { useRouter } from "vue-router"
import { useProductsStore } from "../store/use-products-store"

const router = useRouter()
const $productsStore = useProductsStore()

const categories = ref()
const products = ref()

async function fetchCategories () {
  const result = await getCategories()

  categories.value = result.items
}

async function fetchProducts () {
  const result = await getProducts()
  products.value = result.items
}

async function handleClick (id: number) {
  $productsStore.setProductsList(id)
}

function checkProductInCart (id: number) {
  return $productsStore.isProductInCart(id)
}

async function handleCategory (id: number) {
  await router.push({ name: "category", params: { id } })
}

async function handleProduct (id: number) {
  await router.push({ name: "product", params: { id } })
}

onMounted(async () => {
  await fetchCategories()
  await fetchProducts()
})
</script>
