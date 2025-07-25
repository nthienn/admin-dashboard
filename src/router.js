import { createRouter, createWebHistory } from "vue-router"
import Dashboard from "./layouts/Dashboard.vue"
import Home from "./pages/Home.vue"
import Login from "./pages/Login.vue"
// import useUserStore from "./store/user.js"
import Advertisement from "./pages/Advertisement.vue"
import AdvertisementDetail from "./pages/AdvertisementDetail.vue"

const routes = [
    {
        path: "/",
        component: Dashboard,
        children: [
            {
                path: "/",
                name: "Home",
                component: Home
            },
            {
                path: "/advertisements",
                name: "Advertisement",
                component: Advertisement
            },
            {
                path: "/advertisement/:id",
                name: "AdvertisementDetail",
                component: AdvertisementDetail
            }
        ],
        // beforeEnter: async (to, from, next) => {
        //     try {
        //         const userStore = useUserStore()
        //         await userStore.fetchUser()
        //         next()
        //     } catch (error) {
        //         console.log('Failed to fetch data: ', error);
        //         next(false)
        //     }
        // }
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router