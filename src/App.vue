<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/cards">Cards</router-link> |
    <router-link to="/reactividad">Reactividad</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    text-decoration: none;
    font-weight: bold;
    color: #1f3850;

    &.router-link-exact-active {
      color: #47b0e0;
    }
  }
}
</style>
