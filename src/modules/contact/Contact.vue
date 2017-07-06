<template>
  <div :class="divClassName">

  <sc-palm-tree></sc-palm-tree>

  <transition name="enter">
    <footer class="ground" v-if="active"></footer>
  </transition>
  </div>
</template>

<script>
import PalmTree from './components/palm.tree.vue'

export default {
  name: 'app',
  data () {
    return {
      divClassName: 'contact',
      active: false
    }
  },
  mounted: function () {
    this.active = true
  },
  components: {
    'sc-palm-tree': PalmTree
  }
}
</script>

<style>
  .contact {
    background: #85D7FF;
    position: absolute;
    width: 100%;
    height: 100vh;
    top:0;
    left: 0;
    overflow: hidden;
  }

  .ground {
    position: absolute;
    width: 110%;
    bottom: 0;
    background: brown;
    height: 100px;
    border-top-left-radius: 100%;
    border-top-right-radius: 100%;
    left: -5%;
    transition: all 1s;
  }

  .enter-enter-active {
    bottom: -100px;
  }
</style>
