<template>
   <div id="menu">
    <!-- Menu utilizado para tamaños grandes de pantalla -->
    <div id="nav">
      <router-link :to='{name:"Home"}'><img src="../assets/logo/hackamarket_logo.png" /></router-link>
      <router-link :to='{name:"Home"}'>Home</router-link>
      <router-link :to='{name:"Products"}'>Products</router-link>
      <router-link :to='{name:"Clients"}'>Clients</router-link>
      <router-link :to='{name:"Register"}'>Register</router-link>
      <router-link :to='{name:"About"}'>About</router-link>
    </div>

    <!-- Menu utilizado para tamaños pequeños de pantalla. Movil ... -->
    <div id="mobile-nav" v-show="seeModal">
      <router-link :to='{name:"Home"}'>Home</router-link>
      <router-link :to='{name:"Products"}'>Products</router-link>
      <router-link :to='{name:"Clients"}'>Clients</router-link>
      <router-link :to='{name:"Register"}'>Register</router-link>
      <router-link :to='{name:"About"}'>About</router-link>
    </div>
    <!-- Boton para menu desplegable y vertical del modo movil -->
      <div class="menu-btn">
      <button @click="seeModal =! seeModal"><fa-icon :icon="['fas','bars']" size="2x" /></button>
    </div>
  </div>
</template>

<script>
export default {

    name:"MenuCustom",
    data(){
    return{
        seeModal: false
    }
  }
}
</script>

<style scoped>

#nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 30px;
  background-color: #40916c;
  height: 3.5rem;
}

#nav a {
  font-weight: bold;
  margin-right: 5rem;
  text-decoration: none;
  color: #fff;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

h1 {
  color: #354f52;
}

/* Media Queries */


/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 600px) { 

  #nav{
    display:none;
  }
  #mobile-nav {
    display: flex;
    position: absolute;
    flex-direction: column;
    top: 0;
    left: 0;
    width: 35%;
    height: 100%;
    background-color: rgb(64, 145, 108, 0.8);
  } 

  #mobile-nav a {
    text-decoration: none;
    margin-top: 1.2rem;
    margin-bottom: 1rem;
    color: #fff;
  }

  #mobile-nav a:hover {
    text-decoration: underline;
    transform: scale(1.5);
    color: yellowgreen;
    cursor: pointer;
  }

  .menu-btn {
    position: absolute;
    cursor: pointer;
    top: 15px;
    right: 30px;
  } 
  
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 600px) {
  .menu-btn{
    display:none;
  }

  .mobile-nav{
    display:none;
  }
}

@media only screen and (max-width: 957px) {
  #nav img{
    display:none;
  }
  .mobile-nav{
    display:none;
  }
}

</style>