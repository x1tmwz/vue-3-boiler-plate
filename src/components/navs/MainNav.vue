<template>
<nav class="main-nav">
    <h1>Tools</h1>
    <router-link v-for="link in links" :key="link.name" :to="link" class="main-nav_link" active-class="main-nav_link--active">{{link.name}}</router-link>
    <button class="main-nav_link" @click="logout()">logout</button>
</nav>
</template>

<script>
import roles from '../../data/roles'
export default {
  name: 'MainNav',

  computed: {
    links: function () {
      const role = this.$store.getters['auth/role'] + ''
      const links = []
      for (let i = 0; i < this.$router.options.routes.length; i++) {
        const route = this.$router.options.routes[i]
        if(route && route.path.indexOf("/:") !== -1){
          continue;
        }
        if ((!route.meta && route.name !== 'login') || (role === roles.ADMIN && route.name !== 'login')) {
          links.push({
            name: route.name,
            path: route.path
          })
          continue;
        }
        if (route.meta && route.meta.role === role) {
          links.push({
            name: route.name,
            path: route.path
          })
        }
      }
      return links
    }

  },
  methods: {
    logout () {
      this.$store.dispatch('auth/logout')
      this.$router.push({ name: 'login' })
    }
  }

}
</script>

<style lang="scss">
.main-nav{
  position: absolute;
  display: flex;
  flex-direction: column;
  right:0;
  top:0;
  background-color: rgb(80, 100, 121);
  width: 10%;
  height: 100%;
  box-shadow: 1px 1px 5px 1px rgb(31, 30, 30);
  h1{
    color:white;
    margin: 1rem;
  }
}
.main-nav_link{
  margin: 0.2rem;
  background: none;
  border: none;
  color: white;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.2rem;
}
.main-nav_link--active{
  background: white;
  color: rgb(80, 100, 121);
}
@media (max-width:850px){
  .main-nav{
  position: relative;
  display: grid;
  left:0;
  top:0;
  background-color: rgb(80, 100, 121);
  width: 100%;
  min-height: 5%;
  height: auto;
  box-shadow: 1px 1px 5px 1px rgb(31, 30, 30);
  h1{
    color:white;
    margin: 0;
    font-size: 1rem;
  }
}
.main-nav_link{
  font-size: 1rem;
  margin: 0.2rem;
  background: none;
  border: none;
  color: white;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.2rem;
}
.main-nav_link--active{
  background: white;
  color: rgb(80, 100, 121);
}
}

</style>
