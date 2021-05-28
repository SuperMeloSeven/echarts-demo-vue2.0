<template>
  <div id="app">
    <echarts-demo></echarts-demo>
  </div>
</template>

<script>
import echartsDemo from './components/echarts-demo'

export default {
  name: 'App',
  components: {
    echartsDemo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
