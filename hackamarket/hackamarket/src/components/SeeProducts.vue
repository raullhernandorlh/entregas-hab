<template>
  <div class="product">
    <ul class="list-product">
      <li v-for="product in products" :key="product.id">
        <div class="data-product">
          <p>
            <span>Name</span>
            {{ product.nombre}}
          </p>
          <p :class="{green: product.stock > sinStock, red:product.stock == sinStock}"><span>Stock: </span>{{ product.stock }}</p>
          <p><span>Disponibility: </span>{{product.disponibilidad}}</p>
          <p>
            <img  :src="product.imagen" />
          </p>
          <div class="buttons">
            <button @click="thanksForBuyingModal()">Buy</button>
            <button @click="thanksForReserveModal()">Reserve</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

// Import de la libreria "sweetalert2" que nos permitira imprimir mensajes tipo modal por pantalla
import Swal from "sweetalert2"

export default {
name: "SeeProducts",
props: {
    products: Array,

},
data(){
  return{
    sinStock:0
  }
},

methods:{
// THANKS FOR BUYING MODAL - Metodo para mostrar modal realizado con libreria "sweetalert2"
thanksForBuyingModal(){
  Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Thanks for your purchase at Hackamarket!!!!!!',
  showConfirmButton: false,
  timer: 1500
  })
},

// THANKS FOR RESERVE MODAL - Metodo para mostrar modal realizado con libreria "sweetalert2"

thanksForReserveModal(){
  Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Thanks for reservation  at Hackamarket!!!!!!',
  showConfirmButton: false,
  timer: 1500
})
}
}
  
}
</script>

<style scoped>

.list-product {
  display: flex;
  justify-content: space-around;
  list-style: none;
  flex-wrap: wrap;
  list-style: none;
}

.data-product {
  margin-bottom: 3rem;
  border:9px outset #40916c;
  padding: 2rem;
  background-color:rgb(145, 160, 158, 0.7);
}

.data-product img {
  margin-bottom: 0.5rem;
  width: 350px;
  height:200px;
  border:4px outset #40916c;
}

.product-data {
  text-decoration: none;
}

li {
  text-decoration: none;
}

.buttons{
    margin-left:2.5rem;
}
button {
  width: 6rem;
  height: 2.5rem;
  margin-right: 3rem;
  background-color: greenyellow;
  border:3px solid #40916c;
  border-radius: 20rem;
}

button:hover{
  background-color : #40916c;
  border: 3px solid greenyellow;
  color:white;
  cursor:pointer;
}

p{
  font-size:18px;
  font-weight:700;

}
/* Clases utilizadas para mostrar un color u otro dependiendo la disponiblidad del producto.
Si el producto esta disponible el color sera "green" y si no esta disponible sera "red" */

.red{color: red;}
.green{color:yellowgreen;}


</style>