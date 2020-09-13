import './bootstrap'
import Vue from 'vue'
import router from "./router";

// import App from './components/App'

Vue.component('app', require('./components/App.vue').default);

new Vue({
    router  : router,
    el      : '#app',
    // render  : h => h(App),
})
