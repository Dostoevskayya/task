<template>
  <div>
    <nav class="mb-10 d-flex flex-row justify-space-between">
      <v-btn variant="outlined" class="rounded-0" to="/"> main page </v-btn>
      <v-btn variant="outlined" class="rounded-0" to="/cart">
        <div class="d-flex flex-row align-center justify-center">
          <v-icon icon="mdi-cart"></v-icon>
          <span class="white">&nbsp;({{ count }})</span>
        </div>
      </v-btn>
    </nav>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { useProductsStore } from "./store/use-products-store"
import { computed } from "vue"
import { RouterView } from "vue-router"
import "@mdi/font/css/materialdesignicons.css"

const $productsStore = useProductsStore()

const count = computed(() => $productsStore.productsList.length)
</script>
