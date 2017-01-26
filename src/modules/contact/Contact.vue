<template>
  <div :class="divClassName">
    <img src="../../assets/logo.png">
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      divClassName: 'contact'
    }
  }
}
</script>

<style>
  .contact {
    text-align: center;
  }
</style>
