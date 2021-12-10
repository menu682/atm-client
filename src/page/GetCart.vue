<template>
  <div>
      <ul>
        <li v-for="cart in carts" :key="cart.id">
          <router-link :to="{path: '/enterpin/' + cart.cartNumber}">
            Карта № {{cart.cartNumber}}
          </router-link>
          <small>{{cart.message}}</small>
        </li>
      </ul>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "GetCart",
  data() {
    return {
      carts: []
    }
  },
  mounted() {
    this.getAllCarts()
  },
  methods: {
    getAllCarts() {
      const url = "http://localhost:8080/getmoney/getallcarts"
      axios.post(url).then(res => {
        this.carts = res.data
      })
    }
  }

}
</script>

<style scoped>

</style>