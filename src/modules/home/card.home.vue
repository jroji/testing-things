<template>
  <transition name="open" @after-leave="afterLeave">
    <article class="container" ref="cont" @click="enterArea" v-if="show">
        <p>{{ name }}</p>
    </article>
  </transition>
</template>

<script>
  export default {
    name: 'card',
    data () {
      return {
        show: true
      }
    },
    props: ['name', 'color'],
    mounted () {
      this.$refs.cont.style.background = this.color
    },
    methods: {
      enterArea: function () {
        this.show = !this.show
      },
      afterLeave: function () {
        this.$router.push('develop')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  :host {

  }

  .container {
    border-radius: 2px;
    border-width: 2px;
    border-style: var(--sc-card-border-style, solid);
    border-color: var(--sc-card-border-color, #24292E);
    color: white;
    display: flex;
    flex: 1;
    margin: 10px;
    padding: 10px;
    min-height: 200px;
    justify-content: center;
    align-items: center;
    font-size: var(--sc-card-font-size, 30px);
    text-transform: uppercase;
  }

  .open-enter-active, .open-leave-active {
    transition: transform 1s;
  }

  .open.enter,.open-leave-to {
    transform: scale(50);
  }

</style>
