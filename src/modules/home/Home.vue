<template>
  <div class="home">
    <ul class="home__list">
      <li class="home__item" v-for="item in capabilities" :todo="item">
        <sc-card class="sc-card" :name="item.name" :color="item.color"></sc-card>
      </li>
    </ul>
</template>

<script>
  import axios from 'axios'
  import ScCard from './card.home.vue'

  export default {
    name: 'home',
    data () {
      return {
        capabilities: [
          {
            name: 'Develop',
            color: '#85D7FF'
          },
          {
            name: 'Develop',
            color: '#29EB7F'
          },
          {
            name: 'Develop',
            color: '#FF7849'
          }
        ]
      }
    },
    components: {
      'sc-card': ScCard
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
    flex: 1;
  }

  .home__item {
   list-style: none;
   display: flex;
   flex-basis: 33.3%;
  }

  .sc-card {
    --sc-card-border-color: #24292E;
    --sc-card-border-style: dashed;
  }

</style>
