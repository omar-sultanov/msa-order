import AuthPage from "@/pages/AuthPage";
import {createRouter, createWebHistory} from "vue-router";
import OrderList from "@/pages/OrderList";
import OrderIdPage from "@/pages/OrderIdPage";
import ErrorPage from '@/pages/ErrorPage'

const routes = [
    {
        path: '/',
        component: AuthPage
    },
    {
        path: '/orders',
        component: OrderList
    },
    {
        path: '/orders/:id',
        component: OrderIdPage
    },
    {
        path: '/error',
        component: ErrorPage
    },

]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;