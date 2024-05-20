import { createApp } from "vue"
import router from "./routes"
import "./scss/style.scss"
import App from "./App.vue"
import { createPinia } from "pinia"
// Plugins
import { registerPlugins } from "./plugins"
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

registerPlugins(app)

app.use(router)
app.use(pinia)
app.mount("#app")
