<template>
  <div>
    <input type="number" max="9999" min="0000" v-model="pin"/>
    <button @click="accept">Подтвердить</button>
    <div>{{ message }}</div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "EnterPin",
  data() {
    return {
      cartNumber: this.$route.params.cartNumber,
      pin: "",
      message: ""
    }
  },
  methods: {
    accept() {
      const url = "http://localhost:8080/getmoney/getcart"
      const cartDTO = {
        cartNumber: this.cartNumber,
        cartPin: this.pin
      }
      axios.post(url, cartDTO).then(res => {
        if (res.data.id == null) {
          this.message = res.data.message
        } else {
          const payload = {
            cartNumber: res.data.cartNumber,
            debitBalance: res.data.debitBalance,
            creditBalance: res.data.creditBalance,
            userName: res.data.userName
          }
          this.$store.commit('addCartNumber', payload)
          this.$router.push({path: '/selectbalance/'})
        }
      })
    }
  }
}
</script>

<style scoped>

</style>