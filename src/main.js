import * as Vue from 'vue'
import * as Store from 'vuex'
import * as VueRouter from 'vue-router'
import * as axios from 'axios'
import * as VueAxios from 'vue-axios'

import App from '@/App.vue'
import Home from "@/page/Home";
import AddMoney from "@/page/AddMoney";
import GetMoney from "@/page/GetMoney";
import GetCart from "@/page/GetCart";
import EnterPin from "@/page/EnterPin";
import SelectBalance from "@/page/SelectBalance";
import EnterSumm from "@/page/EnterSumm";


const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [
        {path: '/', component: Home},
        {path: '/addmoney', component: AddMoney},
        {path: '/getmoney', component: GetMoney},
        {path: '/getcart', component: GetCart},
        {path: '/enterpin/:cartNumber', component: EnterPin},
        {path: '/selectbalance', component: SelectBalance},
        {path: '/entersumm/:balanse', component: EnterSumm},
        {path: '/getmoney', component: GetMoney},
    ],
})


const store = Store.createStore({
    state: {
        cartNumber: 0,
        cartPin: 0,
        debitBalance: 0,
        creditBalance: 0,
        userName: "",
        money: [],
        message: ""
    },
    mutations: {
        addCart(state, payload) {
            this.state.cartNumber = payload.cartNumber
            this.state.cartPin = payload.cartPin
            this.state.debitBalance = payload.debitBalance
            this.state.creditBalance = payload.creditBalance
            this.state.userName = payload.userName
        },

        givenMoney(state, payload){
            this.state.money = payload.money
            this.state.message = payload.message
        }


    },
    getters: {}
})


Vue.createApp(App).use(router).use(store).use(VueAxios, axios).mount('#app');


