<template>
  <div class="app_container"  v-bind:class="{ 'app_container--auth': $store.getters['auth/isAuth'] }">
<MainNav v-if="$store.getters['auth/isAuth']" />
    <div class="app">
      <router-view />
    </div>
  </div>
</template>
<script>
import MainNav from './components/navs/MainNav.vue'
export default {
  name: 'app',
  components: { MainNav }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: lightslategray;
  min-width: 100%;
  height: 100%;
  min-height: 100vh;
}
.app_container {
  display: flex;
  min-width: 100%;
  height: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  position: relative;
}
.app_container--auth {
  justify-content:start;
  position: relative;
   @media (max-width:850px) {
      justify-content:center;
      flex-direction: column;
  }
}
.app {
  background: white;
  width: 85vw;
  height: 100%;
  min-height: 90vh;
  margin-left: 2rem;
  @media (max-width:850px) {
     margin-left: 0;
  }
}
</style>
