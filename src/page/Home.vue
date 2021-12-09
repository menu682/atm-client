<template>
  <h1>БАНКОМАТ</h1>
  <div>{{message}}</div>
  <router-link to="/addmoney">Я инкасатор, вношу деньги!</router-link>
  <router-link to="/getmoney">Я пользователь, снимаю деньги!</router-link>

</template>

<script>

import axios from 'axios'

export default {
  name: "Home",
  data() {
    return {
      message : ''
    }
  },
  methods: {

  },
  mounted() {
    axios.post('http://localhost:8080/').then(response => {
      this.message = response.data.message
    })
  }

}
</script>

<style scoped>

</style>