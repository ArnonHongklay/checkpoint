<template>
  <section class="container">
    <div>
      <app-logo/>
      <ul>
        <li v-for="fact in facts" :key="fact.text">
          {{ fact.text }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
// import fetch from 'isomorphic-fetch'
import axios from 'axios'
import AppLogo from '~/components/AppLogo.vue'

export default {
  async asyncData(){
    const response = await axios.get('https://nuxt-ssr.firebaseio.com/facts.json')
    const facts = await response.data
    return { facts }
  },
  components: {
    AppLogo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

