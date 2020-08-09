<template>
  <div class="home">
     <header class="parallax-completo">
        <div class="texto-boardgame-image1">
            <h2>The Most Stylish Market</h2>
        </div>
    </header>
    <section class="center espacio">
        <h2>¿ What is HackAMarket ?</h2>
        <p>HackAMarket is a small online marketplace for selling used and pre-owned laptops.
            We take care of the shipping costs from your home to our offices as well as from our offices 
            and warehouses to your home and we offer you the most competitive prices in the market in our more
             than a thousand models of notebooks
        </p>
    </section>

    <section class = "parallax-pequeno"></section>

    <section class="texto">
        <h2>Disfruta del elemento Parallax</h2>
    </section>
    <section class="center espacio">

        <h2>Our History</h2>
        <p>
            Founded our small offices in 2000 in the American city of Cleveland in the state of Ohio.
            Everything was very fast, and by 2003 we were able to expand internationally to more than 200 countries on 5 continents.
            Today thousands of people have managed to sell and buy second-hand or used notebooks in perfect condition with great satisfaction.
        </p>
    </section>

    <section class = "parallax-pequeno"></section>

    <section class="texto">
        <h2> 100% Free Shiping  </h2>
    </section>
    <section class="parallax-completo">
        <div class="texto-boardgame-image1"> 
            <h2>The Most Stylish Market</h2>
        </div>
       
    </section>


  </div>
</template>

<script>

// Import de la libreria axios
import axios from "axios"

// Importamos el componente "SeeProducts" para poder relazionarlo con la vista "Home"

import seeproducts from "@/components/SeeProducts.vue"

// Import de la libreria "sweetalert2" que nos permitira imprimir mensajes tipo modal por pantalla

import Swal from "sweetalert2"

export default {
  name: 'Home',
  components: {
    seeproducts
  }
}
</script>

<style scoped>

  *{
    margin:0;
    padding:0;
}

body{
    width:100%;
    font-family: 'Lato';
}

.parallax-completo{
    width:100%;
    height:100vh;
    background-image: url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    display:flex;
    justify-content: center;
    align-items: center;
}

.texto-boardgame-image1{
    background: #111;  
    padding: 18px;
    width: 320px;
    text-align: center;
    color:#fff;
}

h2{
    font-size:32px;
    font-weight: 300;
}

.center{
    max-width: 1100px;
    width: 90%;
    overflow: hidden;
    margin:auto;
}

.espacio{
    padding: 30px 0px 60px 0px;

}

.espacio h2{
    text-align:center;
    padding: 30px;
}

.espacio p{
    text-align: justify;
}

.parallax-pequeno{
    height:450px;
    background-image: url("https://images.unsplash.com/photo-1554902843-260acd0993f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");
    background-attachment: fixed;
    background-size: cover;
    background-position:center;
}



.parallax-pequeno h2{
    display:flex;
    height:inherit;
    justify-content:center;
    align-items:center;
    color:#000;
    font-weight: 400;
}

.texto{
    background: #ccc;
    height: 190px;
}

.texto h2{
    text-align:center;
    color:#000;
    display:flex;
    height: inherit;
    justify-content: center;
    align-items: center;
}

</style>

