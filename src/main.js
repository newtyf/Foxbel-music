import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import wb from "./registerServiceWorker";

// import './spotify'

createApp(App).use(store).use(router).mount('#app')
const app = createApp({})
app.config.globalProperties.$workbox = wb;
