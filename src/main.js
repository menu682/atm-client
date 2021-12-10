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
    routes : [
        { path: '/', component: Home },
        { path: '/addmoney', component: AddMoney },
        { path: '/getmoney', component: GetMoney },
        { path: '/getcart', component: GetCart },
        { path: '/enterpin/:cartNumber', component: EnterPin},
        { path: '/selectbalance', component: SelectBalance},
        { path: '/entersumm/:balanse', component: EnterSumm},
    ],
})



const store = Store.createStore({
    state: {
        cartNumber: 0,
        debitBalance: 0,
        creditBalance: 0,
        userName: "",

    },
    mutations:{
      addCartNumber(state, payload){
          this.state.cartNumber = payload.cartNumber
          this.state.debitBalance = payload.debitBalance
          this.state.creditBalance = payload.creditBalance
          this.state.userName = payload.userName
      }
    },
    getters: {}
})


Vue.createApp(App).use(router).use(store).use(VueAxios, axios).mount('#app');


