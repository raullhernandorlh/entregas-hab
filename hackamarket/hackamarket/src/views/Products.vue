<template>
  <div class="products">
    <vue-headful title=" Products" />
    <h1>Products List</h1>
    <spinner v-show="loading_spinner"/>
    <seeproducts :products="products"  v-show="list_products"/>
  </div>
</template>

<script>

// Import de la libreria axios
import axios from "axios"

// Importamos el componente "SeeProducts" para poder relacionarlo con la vista "Home"

import seeproducts from "@/components/SeeProducts.vue"

// Importamos el componente " Spinner" para poder relacionarlo con la vista "Home"

import spinner from '@/components/Spinner.vue'


export default {

name:"Products",

components:{
    seeproducts,
    spinner
},

data(){
    return{
        products:[],
        loading_spinner:"true",
        list_products:"false"

    }
},

methods:{

  //ACTIVATES SPINNER - Metodo que permite mostrar los productos despues de que se muestra el spinner de carga 

   activatespinner(){
      setTimeout( () =>
        { 
          this.loading_spinner = false; 
          this.list_products = true;
        }, 1000);
   },

// GET PRODUCTS - Metodo para obtener los ptoductos de la base de datos
  getProducts(){
    var self = this;
    //Llama de axios a la api
    axios.get("http://localhost:3050/products")
    .then(function (response) {
    self.products = response.data;
    })
    .catch(function (error) {
    console.log(error);
    })
  }

},

created() {
    this.getProducts();
},

// Hook "mounted". Utilizado para ejecutar el spinner una vez la app ya esta montada
mounted(){
  this.activatespinner()
}

}
</script>

