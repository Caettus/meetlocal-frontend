import EventFeed from '../components/EventFeed/Feed.vue'
import HomePage from '../components/HomePage.vue'
import DetailsPage from '../components/DetailsPage/Details.vue'
import { createRouter, createWebHistory } from 'vue-router'



const routes = [
    { path: '/', component: HomePage, name: 'home' },
    { path: '/feed', component: EventFeed, name: 'feed' },
    { path: '/details/:id', component: DetailsPage, name: 'details' },
]

const router = createRouter({
    history: createWebHistory(), 
    routes,
})

export default router