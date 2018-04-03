<template>
  <div id="app">
    <img src="./assets/logo.png">
    <LanguageSwitcher />
    <h1>{{$t('message.hello')}}</h1>
    <p>{{ $tc('message.text-users', users.length, { count: users.length }) }}</p>
  </div>
</template>

<script>
import LanguageSwitcher from './components/LanguageSwitcher.vue'

export default {
  name: 'app',
  data() {
    return {
      users: ["Gustavo", "Pedro", "João", "Carlos"]
    }
  },
  components: {
    LanguageSwitcher
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
