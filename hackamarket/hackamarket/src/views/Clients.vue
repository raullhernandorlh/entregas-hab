<template>
    <div class="clients">
        <vue-headful title="Clients"/>
        <h1>Clients</h1>
        <spinner v-show="loading_spinner"/>
        <seeclients v-on:data="showClientInformation" v-on:indexForDelete="deleteClients"
        :clients="clients" v-show="list_products" />
        <!-- Modal para actualizar Cliente -->
        <!-- El v-show hace referencia a la variable que esta en data para mostrar el modal -->
       <div v-show="seeModal" class="modal">
           <div class="modalBox">
                <h3>Update your Data </h3>
                <p> Client Id: {{ idClient }}</p>
                <input type="text" class="text" placeholder="Update your url image" v-model="updatedPhoto" />
                <input type="text" class="text" placeholder="Update your Name" v-model="updatedName" />
                <input type="text" class="text" placeholder="Update your Email" v-model="updatedEmail" />
                <input type="text" class="text" placeholder="Update your Username" v-model="updatedUsername" />
                <input type="text" class="text" placeholder="Update your Password" v-model="updatedPassword" />
            <div class="modalbox-buttons">
                <button @click="seeModal =! seeModal">Cancel</button>
                <button @click="updateClient()">Update Client</button>
            </div>
            </div>
       </div>
    </div>
</template>


<script>

// IMPORTS

// Import de la libreria axios
import axios from "axios";

//Relacionamos la vista "Home" con el componente "See Clients"
import seeclients from "@/components/SeeClients.vue";

// Importamos el componente " Spinner" para poder relacionarlo con la vista "Home"

import spinner from '@/components/Spinner.vue'

// Import de libreria "sweetalert2"
import Swal from "sweetalert2";

export default {
name:"Clients",
components:{
    seeclients,
    spinner
},

data(){
    return{
    clients:[],
    idClient:"",
    updatedPhoto:"",
    updatedName:"",
    updatedEmail:"",
    updatedUsername:"",
    updatedPassword:"",
    loading_spinner:"true",
    list_products:"false",
    seeModal: false
    }
},

methods:{

     activatespinner(){
      setTimeout( () =>
        { 
          this.loading_spinner = false; 
          this.list_products = true;
        }, 1000);
    },

    // Metodo que muestra un modal en el que se le corrobora al usuario que ha actualizado el cliente correctamente
    // A su vez tambien recarga la pagina para ver que los datos se han actualizado correctamente

    sweetAletConfirmUpdate(){
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "The client was updated successfully",
      showConfirmButton: false,
    });
      setTimeout(function(){location.reload()},5000);
    },

    // Metodo que muestra un modal en el que se comunica al usuario de la aplicacion que la eliminacion de usuario
    // que ha realizado se ha producido correctamente. A su vez este metodo tambien recarga la pagina para poder
    // ver que el usuario realmente se ha eliminado.

    sweetAlertConfirmDelete() {
      Swal.fire({
        icon: "error",
        title: "Client Deleted",
        text: "The Client has been deleted!",
      });
       setTimeout(function(){location.reload()},4000);
    },

    // Metodo para BORRAR los CLIENTES de la base de datos
    deleteClients(clientIndex){
        var self = this;
        axios.delete("http://localhost:3050/delete/" + clientIndex)
        .then(function(response){
            console.log(response)
        })
        .catch(function(error){
            console.log(error)
        })
        this.sweetAlertConfirmDelete();
    },

    // Metodo para ACTUALIZAR los CLIENTES de la base de datos

    updateClient(){
        var self = this;
        axios.put("http://localhost:3050/update/" + self.idClient , {
            photo: self.updatedPhoto,
            name: self.updatedName,
            email: self.updatedEmail,
            username: self.updatedUsername,
            password: self.updatedPassword
        })
        .then(function(response) {
            this.sweetAletConfirmUpdate();
        })
        .catch(function(error){
            this.sweetAlertConfirmDelete();
        })
    },

    // Metodo para la MOSTRAR de los datos de los CLIENTES

    showClientInformation(dataClient){
        this.idClient = dataClient.id;
        this.updatedPhoto = dataClient.photo
        this.updatedName = dataClient.nombre;
        this.updatedEmail = dataClient.email
        this.updatedUsername = dataClient.usuario;
        this.updatedPassword = dataClient.password;

        //Activamos el modal para que se vea
        this.seeModal = true;
    },

    //Metodo para OBTENER los CLIENTES de la base de datos

    getClients(){
        var self = this;
        //LLamada de axios para obtner los clientes de la BBDDD
        axios.get("http://localhost:3050/clients/")
        .then(function(response){
            self.clients = response.data;
        })
        .catch(function(error){
            console.log(error);
        })
    },
    
    },

    // Hook "created" necesario para realizar la carga de los datos del cliente antes de que se muestra la APP.
    // De esta forma nos aseguramos que cuando se muestre nuestra aplicacion esta contendra los datos
    created(){
        this.getClients();
    },

    // Hook "mounted". Utilizado para ejecutar el spinner una vez la app ya esta montada
    mounted(){
        this.activatespinner()
    }
}
</script>


<style scoped>

.modalBox{
    width:40%;
    height:25rem;
    flex-direction:column;
    align-items: center;
    position:absolute;
    border:1px solid black;
    /* margin-top: -75rem;
    margin-left: 38rem; */
    background-color:#fff;
    border:9px outset #40916c;
    background-color:rgb(145, 160, 158, 0.9);
    /* Se utilizan todos estos comando para centrar el modal */
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    margin:auto;
    display:flex;
}

.text{
    width:40%;
    height:10%;
    margin-bottom:1rem;
    border-radius:20rem;
    border:1px solid yellowgreen;
}

.modalbox-buttons{
    display:flex;
    margin-top:1rem;
    margin-bottom:1rem;
    margin-left:2rem;
}

button {
  width: 9rem;
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
}

p{
  font-size:18px;
  font-weight:700;
}


</style>