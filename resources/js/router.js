import Vue from 'vue'
import VueRouter from "vue-router";

import Home from "./components/views/offguard/contents/Home";
import About from "./components/views/offguard/contents/About";
import OffGuardContainer from './components/views/offguard/Container';

import Dashboard from "./components/views/onguard/contents/Dashboard";
import OnGuardContainer from './components/views/onguard/Container';

import AuthContainer from './components/auth/Container';
import Login from "./components/auth/contents/Login";

Vue.use(VueRouter)

const router = new VueRouter({
    mode    : 'hash', //history
    routes  : [
        {
            path    : '/',
            name    : 'offguard',
            component   : OffGuardContainer,
            children    : [
                {
                    path    : '/',
                    name    : 'home',
                    component   : Home
                },
                {
                    path    : '/about',
                    name    : 'home.about',
                    component   : About
                },
            ]
        },
        {
            path        : '/auth',
            name        : 'auth',
            component   : AuthContainer,
            children    : [
                {
                    path: '/login',
                    name: 'auth.login',
                    component: Login
                },
            ]
        },
        {
            path        : '/user',
            name        : 'onguard',
            component   : OnGuardContainer,
            children    : [
                {
                    path: '/',
                    name: 'dashboard',
                    component: Dashboard,
                }
            ]
        }
    ]
})

export default router;
