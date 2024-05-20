<template>
  <div>
    <v-progress-linear
      v-if="isLoading"
      height="6"
      indeterminate
      class="mb-5"
    ></v-progress-linear>

    <div
      v-if="cartLength > 0 && product && !isLoading"
      class="d-flex flex-column"
    >
      <div v-for="(item, id) in product" :key="id">
        <v-row class="mb-3 cursor-pointer" @click="handleProduct(item.id)">
          <v-col cols="12" sm="6" md="2">
            <v-img
              :src="item.hdThumbnailUrl"
              :lazy-src="item.hdThumbnailUrl"
              :alt="item.name"
            />
          </v-col>
          <v-col cols="12" sm="6" md="10">
            <div class="d-flex flex-column justify-space-between h-100">
              <div class="d-flex flex-row align-center justify-space-between">
                <span class="text-uppercase">{{ item.name }} </span>
                <v-btn
                  size="small"
                  icon="mdi-close"
                  variant="plain"
                  @click.stop="handleDelete(item.id)"
                ></v-btn>
              </div>
              <div class="d-flex justify-end">
                <h3 class="text-end pr-8 font-weight-bold">
                  {{ item.defaultDisplayedPriceFormatted }}
                </h3>
              </div>
            </div>
          </v-col>
          <v-divider></v-divider>
        </v-row>
      </div>
      <div>
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <h2 class="text-uppercase text-start">
              Total:&nbsp; {{ totalPrice }}₽
            </h2>
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-btn
              variant="outlined"
              class="rounded-0 w-100"
              @click="handlePlaceOrder"
              >Place order</v-btn
            ></v-col
          >
        </v-row>
      </div>
    </div>
    <div v-if="cartLength === 0 && !isLoading">
      <span class="text-uppercase">cart is empty</span>
    </div>
    <v-dialog v-model="isShow" max-width="500">
      <div
        style="background: white"
        class="pa-10 d-flex flex-column align-center"
      >
        <h2 class="pa-10 text-center">Thank you for your purchase! 🛍️</h2>
        <v-btn
          variant="outlined"
          class="rounded-0 w-100"
          @click="isShow = false"
        >
          continue shopping</v-btn
        >
      </div>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue"
import { useProductsStore } from "../store/use-products-store"
import getProductById from "../api/getProductById"
import { useRouter } from "vue-router"

const $productsStore = useProductsStore()

const isShow = ref(false)
const isLoading = ref(false)
const product = ref()
const router = useRouter()

const cartLength = computed(() => $productsStore.productsList.length)
const priceList = computed(() => product.value.map((item) => item.price))
const totalPrice = computed(() => $productsStore.totalPrice(priceList.value))

function handleDelete (id: number) {
  $productsStore.deleteProduct(id)

  product.value = product.value.filter((i) => i.id !== id)
}

async function getProductListByIds () {
  isLoading.value = true
  try {
    const result = await getProductById($productsStore.productsList)

    product.value = result.items
  } finally {
    isLoading.value = false
  }
}

async function handleProduct (id: number) {
  await router.push({ name: "product", params: { id } })
}

function handlePlaceOrder () {
  isShow.value = true
  $productsStore.productsList = []
}

onMounted(async () => {
  await getProductListByIds()
})
</script>
