import * as Vue from 'vue'
import * as Store from 'vuex'
import * as VueRouter from 'vue-router'
import * as axios from 'axios'
import * as VueAxios from 'vue-axios'

import App from '@/App.vue'
import Home from "@/page/Home";
import AddMoney from "@/page/AddMoney";
import GetMoney from "@/page/GetMoney";


const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes : [
        { path: '/', component: Home },
        { path: '/addmoney', component: AddMoney },
        { path: '/getmoney', component: GetMoney }
    ],
})



const store = Store.createStore({
    state: {
    },
    getters: {}
})


Vue.createApp(App).use(router).use(store).use(VueAxios, axios).mount('#app');


