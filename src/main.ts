import './assets/sass/style.scss'
import './assets/sass/customTheme.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import router from './router'
import 'vue-toastification/dist/index.css'
import Toast from 'vue-toastification'

const app = createApp(App)
app.use(Toast)
app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.mount('#app')
