import { createRouter, createWebHistory } from 'vue-router'
import Experience from '../components/Experience.vue'
import RegisteredDetails from '../views/RegisteredDetails.vue'
import MyProfile from '../views/MyProfile.vue'
import Homepage from '../views/Homepage.vue'
import LoginIndex from "../views/LoginIndex.vue"
import ReleasePage from "../views/ReleasePage.vue"
const routes = [
    {
        path:'/',
        name:'LoginIndex',
        component:LoginIndex
    },
    {
        path:"/ReleasePage",
        name:"ReleasePage",
        component:ReleasePage
    },
    {
        path: "/RegisteredDetails",
        name: "RegisteredDetails",
        component: RegisteredDetails
    },
    {
        path: "/MyProfile",
        name: "MyProfile",
        component: MyProfile
    },
    {
        path: '/experience',
        name: 'experience',
        component: Experience
    },
    {
        path: '/Homepage',
        name: 'Homepage',
        component: Homepage
    },
    {
        path: '/:pathMatch(.*)',
        redirect: '/'
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    mode:"history",
    base:"/op/"
})

export default router