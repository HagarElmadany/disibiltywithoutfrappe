// import '@primevue/themes/lara-light-teal/theme.css'
// import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura';
import i18n from './assets/i18n/index'
import './style.css'



const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.use(i18n)

app.mount('#app')
