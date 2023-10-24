import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'
import GeoLocation from './components/Location/Geolocation.vue'
import Test from './components/test.vue'


// 2. Define some routes
const routes = [
  { path: '/', component: GeoLocation, name: 'home' },
  { path: '/test', component: Test, name: 'test' },
]

// 3. Create the router instance and pass the `routes` option
const router = createRouter({
  history: createWebHistory(), // Use createWebHashHistory
  routes,
})


createApp(App).use(router).mount('#app')


