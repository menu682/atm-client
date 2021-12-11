<template>
  <div>

    <div><h1>Ты - {{ userName }}</h1></div>
    <div>
      <h4>На балансе этой карты:
        <p v-if="balance === 'debit'">{{ debitBalance }}</p>
        <p v-else>{{ creditBalance }}</p>
      </h4>
    </div>
    <p>Ведите сумму кратную {{multiple}}</p>
    <div>
      <p>Сколько хотите снять?</p>
      <input type="number" min="0" v-model="sum"/>
      <button @click="getMoney">Снять деньги</button>
    </div>
    <div>{{ message }}</div>


  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "EnterSumm",
  data() {
    return {
      balance: this.$route.params.balanse,
      userName: this.$store.state.userName,
      debitBalance: this.$store.state.debitBalance,
      creditBalance: this.$store.state.creditBalance,
      cartNumber: this.$store.state.cartNumber,
      cartPin: this.$store.state.cartPin,
      sum: "",
      message: "",
      multiple: ""
    }
  },
  mounted() {

    this.getMultiple()

  },
  methods: {
    getMultiple() {
      const url = "http://localhost:8080/getmoney/getmultiple"
      axios.post(url).then(res => {
          this.multiple = res.data.multiple
      })
    },


    getMoney() {

      let currentBalance = 0
      if (this.balance === 'debit') {
        currentBalance = this.debitBalance
      } else if (this.balance === 'credit') {
        currentBalance = this.creditBalance
      }

      if (currentBalance < this.summ) {
        this.message = "Недостаточно денег!"
      } else {

        const giveOutSumDTO = {
          sum : this.sum,
          cartNumber: this.cartNumber,
          cartPin: this.cartPin,
          balance: this.balance
        }
        const url = "http://localhost:8080/getmoney/givemoney"
        axios.post(url, giveOutSumDTO).then(res => {

          const payload = {
            money: res.data.moneyDTOList,
            message: res.data.message
          }
          this.$store.commit('givenMoney', payload)
          this.$router.push({path: '/getmoney/'})

        })
      }
    }
  }
}
</script>

<style scoped>

</style>