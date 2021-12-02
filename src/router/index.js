import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import RegisteredDetails from '../views/RegisteredDetails.vue'
import MyProfile from '../views/MyProfile.vue'
// import Client from '../views/Client.vue'
// import Developer from '../views/Developer.vue'
const routes = [{
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/signup',
        name: 'signup',
        component: SignUp
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
        path: '/:pathMatch(.*)',
        redirect: '/'
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router