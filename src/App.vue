<template>
   <div class="nav">
      <router-link :to="{name:'HomePage'}">Home</router-link>
      <router-link :to="{name:'AddEmployee'}">Add</router-link>
      <router-link :to="{name:'ListEmployees'}">Display</router-link>
   </div>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.nav {
  width: 100%;
  background-color: #2c3e50;
  color: #fff;
}
a {
  color: #fff;
  text-decoration: none !important;
  font-size: large;
  padding: 20px 25px;
  font-weight: bold;
}
a:hover {
  background-color: green;
  border-radius: 10px;
}

</style>
