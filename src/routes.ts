import { createWebHistory, createRouter } from "vue-router"
import CategoryList from "./components/CategoryList.vue"
import ProductPage from "./components/ProductPage.vue"
import CartPage from "./components/CartPage.vue"
import CategoryPage from "./components/CategoryPage.vue"
import NotFound from "./components/NotFound.vue"

const routes = [
  {
    path: "",
    name: "categories",
    component: CategoryList,
  },
  {
    path: "/product/:id",
    name: "product",
    component: ProductPage,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartPage,
  },
  {
    path: "/category/:id",
    name: "category",
    component: CategoryPage,
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
