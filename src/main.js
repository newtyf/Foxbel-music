import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import wb from "./registerServiceWorker";

// import './spotify'

const app = createApp(App)
app.config.globalProperties.$workbox = wb;
app.use(store).use(router).mount('#app')
