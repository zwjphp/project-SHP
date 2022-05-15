<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <Fooder v-show="$route.meta.show"/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header'
import Fooder from './components/Fooder'

export default {
  name: 'App',
  components: {
    Header,
    Fooder
  },
  mounted(){
     // 通知Vuex发请求，获取数据，存储于仓库当中
    this.$store.dispatch('categoryList');
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
  /* margin-top: 60px; */
}
</style>
