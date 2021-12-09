<template>
  <div>
    <h1>Добавляем купюры</h1>
    <ul>
      <li v-for="bill in money" :key="bill.id"> {{ bill.bill }} <input type="number" min="0"
                                                                       step="1"
                                                                       v-model="bill.amount"></li>
    </ul>
    <button type="button" @click="addmoney">пополнить</button>
    <div>{{ message }}</div>
    <div v-if="summ > 0">В банокмате {{ summ }} грн.</div>
  </div>

</template>

<script>

import axios from "axios";

export default {
  name: "AddMoney",
  data() {
    return {
      money: [],
      message: "",
      summ: 0
    }
  },
  mounted() {
    const url = 'http://localhost:8080/addmoney/getbills'
    axios.post(url).then(res => {
      this.message = res.data.message
      this.money = res.data.moneyDTOList
    })

  },
  methods: {

    addmoney() {

      const reqData = {
        moneyDTOList: this.money,
        message: this.message
      }

      const url = 'http://localhost:8080/addmoney/add'
      axios.post(url, reqData).then(res => {
        this.message = res.data.message
        this.countMoney(res.data.moneyDTOList)
      })

    },

    countMoney(moneyDTOList) {
      let result = 0
      moneyDTOList.forEach(element => {
        result += element.bill * element.amount
      })

      this.summ = result
    }

  }
}
</script>

<style scoped>

</style>