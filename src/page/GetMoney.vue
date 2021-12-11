<template>
  <div>
<h2>{{userName}} - тебе выдано следующие купюры:</h2>
    <ul>
      <li v-for="bills in money" :key="bills.id">Купюр номиналом {{bills.bill}} грн. - {{bills.amount}} штук</li>
    </ul>
    <h3>{{message}}</h3>
  </div>
  <div>
    <router-link to="/">в начало</router-link>
  </div>
</template>

<script>

export default {
  name: "GetMoney",
  data() {
    return {
      message: this.$store.state.message,
      money: this.$store.state.money,
      userName: this.$store.state.userName,
    }
  },
  mounted() {

  },
  methods: {}
}
</script>

<style scoped>

</style>