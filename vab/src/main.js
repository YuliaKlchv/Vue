import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/css/vendor.min.css"
import "./assets/css/appkit.min.css"

const app = createApp(App)

app.use(router)

app.mount('#app')
