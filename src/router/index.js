import EventFeed from '../components/EventFeed/Feed.vue'
import HomePage from '../components/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'


// 2. Define some routes
const routes = [
    { path: '/', component: HomePage, name: 'home' },
    { path: '/feed', component: EventFeed, name: 'feed' },
]

const router = createRouter({
    history: createWebHistory(), // Use createWebHashHistory
    routes,
})

export default router