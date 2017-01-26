<template>
  <header class="v-header">
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
  export default {
    name: 'v-header',
    data () {
      return {
        title: 'Vue app'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header {
    display: flex;
    height: 80px;
    background: #dadada;
    vertical-align: center;
    justify-content: center;
  }
</style>
