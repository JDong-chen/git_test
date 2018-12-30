<template>
  <div id="app">
    <header>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    </header>
    <router-view/>
  </div>
</template>
<script>
export default {

}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
header {
  height: 10%;
  width: 100%;

  #nav {
    float: right;
    margin: 30px 50px 0 0;
    text-align: right;
    a {
      font-weight: bold;
      color: #2c3e50;
      text-decoration-line: none;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>
