<template>
  <article class="user-card">
      {{ email }}
  </article>
</template>

<script>
  export default {
    name: 'home',
    props: ['email']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .user-card {
    display: flex;
    background: red;
    height: 200px;
    margin: 10px;
    color: white;
    flex: 1;
  }

</style>
