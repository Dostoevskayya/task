<template>
  <div v-if="product">
    <v-row>
      <v-col cols="12" sm="6" md="6">
        <v-img :src="product.hdThumbnailUrl" alt="" />
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <div class="d-flex flex-column justify-space-between pa-10 h-100">
          <div class="d-flex flex-column align-start">
            <h2 class="pb-5 text-uppercase">{{ product.name }}</h2>
            <p
              v-html="product.description"
              class="text-start"
              style="text-wrap: pretty"
            ></p>
          </div>
          <div>
            <v-row>
              <v-col cols="12" sm="6" md="4" class="align-self-center">
                <h3 class="text-start">
                  {{ product.defaultDisplayedPriceFormatted }}
                </h3>
              </v-col>
              <v-col cols="12" sm="6" md="8">
                <v-btn
                  variant="outlined"
                  class="rounded-0 w-100"
                  @click="handleClick"
                  :disabled="checkProductInCart(product.id)"
                >
                  <div
                    v-if="checkProductInCart(product.id)"
                    class="d-flex flex-row align-center ga-2"
                  >
                    <span> in cart </span>
                    <v-icon icon="mdi-check"></v-icon>
                  </div>

                  <span v-else>buy</span>
                </v-btn>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"
import getById from "../api/getById"
import { useRoute } from "vue-router"
import { useProductsStore } from "../store/use-products-store"

const $productsStore = useProductsStore()

const product = ref()
const route = useRoute()

const isItemInCart = ref(false)

async function fetchProductById () {
  const result = await getById(`${route.params["id"]}`)

  product.value = result
}

function checkProductInCart (id: number) {
  return $productsStore.isProductInCart(id)
}

function handleClick () {
  if (isItemInCart.value) {
    return
  } else {
    $productsStore.setProductsList(product.value.id)
    isItemInCart.value = true
  }
}

onMounted(async () => {
  await fetchProductById()
  checkProductInCart(product.value.id)
})
</script>
