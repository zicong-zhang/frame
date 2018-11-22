<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <!-- comment -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  created() {
    console.log(+new Date());
  }
}
</script>


<style lang="scss">
// @import './sass/_var.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  display: flex;
  padding: 10px;
  a {
    font-weight: bold;
    color: #f00;
    /* &.router-link-exact-active {
      color: #42b983;
    } */
  }
}
</style>
