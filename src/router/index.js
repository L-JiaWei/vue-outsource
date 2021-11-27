import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import Client from '../views/Client.vue'
import Developer from '../views/Developer.vue'
const routes = [{
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/signup',
        name: 'signup',
        component: SignUp
    }, {
        path: "/client",
        name: "client",
        component: Client
    },
    {
        path: "/developer",
        name: "developer",
        component: Developer
    },
    {
        path: '/:pathMatch(.*)',
        redirect: '/'
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router