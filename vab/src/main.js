import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/css/vendor.min.css"
import "./assets/css/appkit.min.css"
// import axios from 'axios'

const app = createApp(App)

app.use(router)
app.mount('#app')


// axios.interceptors.request.use(
//     config => {
//         const token = localStorage.getItem("token");
//         if(token && !config.headers.Authorization){
//             config.headers.Authorization =  `Bearer ${token}`
//         }
//         return config;
//     } ,
//     error => Promise.reject(error)
// )