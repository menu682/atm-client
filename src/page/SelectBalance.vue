<template>
<div>
  <h2>Привет {{userName}}</h2>
  <p>Выбираем откуда будем снимать:</p>
  <p><router-link :to="{path: '/entersumm/debit'}">Личные средства: {{debitBalance}}</router-link></p>
  <p><router-link :to="{path: '/entersumm/credit'}">Кредитные средства:  {{creditBalance}}</router-link></p>

</div>
</template>

<script>
export default {
  name: "SelectBalance",
  data(){
    return{
      userName: this.$store.state.userName,
      debitBalance: this.$store.state.debitBalance,
      creditBalance: this.$store.state.creditBalance,
    }
  }
}
</script>

<style scoped>

</style>