<template>
  <div id="app">
    <div id="nav"> 
      <router-link to="/">Home</router-link>
      <router-link to="/top-artist">Top Artists</router-link>
       <router-link to="/top-tracks">Top Tracks</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <footercustom/>
  </div>
</template>

<script>

import footercustom from '@/components/FooterCustom.vue'

export default {
  name:'App',
  components:{
    footercustom
  }

}

</script>

<style>

* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  background-color:red; 
  position: fixed; 
  width: 100%; /* Full width */
  padding:25px;
 }  

#nav a {
  font-weight: bold;
  color: white !important; 
  margin:30px;
  text-decoration: none;
  font-size: 25px;
  padding-top:5px;
}

#nav a.router-link-exact-active {
  color: red;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

</style>
