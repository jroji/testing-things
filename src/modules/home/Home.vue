<template>
  <div class="home">
    <h1>{{ msg }} {{ name }}</h1>
    <ul class="home__list">
      <li class="home__item" v-for="item in users" :todo="item">
        <user-card :email="item.email"></user-card>
      </li>
    </ul>
</template>

<script>
  import axios from 'axios'
  import UserCard from './User-card.home.vue'

  export default {
    name: 'home',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        name: 'Juan',
        users: []
      }
    },
    components: {
      'user-card': UserCard
    },
    mounted: function () {
      axios.get('https://randomuser.me/api/?results=5').then((data) => {
        this.users = data.data.results
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .home__list {
    display: flex;
    flex-wrap: wrap;
  }

  .home__item {
   list-style: none;
  }

</style>
