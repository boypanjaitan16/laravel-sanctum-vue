import Vue from 'vue'
import VueRouter from "vue-router";

import Home from "./components/views/Home";
import About from "./components/views/About";
import Dashboard from "./components/views/Dashboard";
import Login from "./components/auth/Login";

Vue.use(VueRouter)

const router = new VueRouter({
    mode    : 'hash', //history
    routes  : [
        {
            path    : '',
            name    : 'home',
            component   : Home
        },
        {
            path    : '/about',
            name    : 'about',
            component   : About
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard
        }
    ]
})

export default router;
