<template>
    <div class="register">
        <vue-headful title=" Register" />
        <!-- Mensaje que sale en la vista cuando hay campos vacios -->
        <h1>Register in our awesome APP </h1>
        <p class="errorMessage" v-show="errorMsg">You have empty fields in the form</p>
        <form class="form">
            <input type="text" class="text" v-model="photo" placeholder="Add your Photo" />
            <input type="text" class="text" v-model="name" placeholder="Insert your Name" />
            <input type="email" class="text" v-model="email" placeholder="Insert your Email" />
            <input type="text" class="text" v-model="username" placeholder="Insert your Username" />
            <input type="text" class="text" v-model="password" placeholder="Insert your Password"/>
            <button class="submit" @click="validatingData()">Add New Client</button>
        </form>
    </div>
</template>




<script>

// Import de la libreria axios
import axios from "axios"

// Import de libreria "sweetalert2"
import Swal from "sweetalert2";


export default {
name:"Register",
components:{

},

data(){

return{
    photo:'',
    name:'',
    email:'',
    username:'',
    password:'',
    createClient:false,
    errorMsg:false
    }
},

    methods:{

    sweetAlertConfirmAddClient() {
        Swal.fire({
        position: "top-end",
        icon: "success",
        title: "The client was successfully added",
        showConfirmButton: false,
    });
    setTimeout(function(){location.reload()},5000);
    },

    sweetAlertAddClientError() {
      Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "I cannot add the client",
     });

    },

    validatingData() {
      if (
        this.photo === "" ||
        this.name === "" ||
        this.email === "" ||
        this.username === "" ||
        this.password === ""
      ) {
        // alert('No puedes dejar campos vacios')
        this.errorMsg = true;
        this.createClient = false;
        this.sweetAlertAddClientError();
      } else {
        this.createClient = true;
        this.addNewClient();
        this.sweetAlertConfirmAddClient();
      }
    },

    addNewClient() {
      if (this.createClient === true) {
        var self = this;
        axios
          .post("http://localhost:3050/add", {
            photo:self.photo,
            name: self.name,
            email: self.email,
            username:self.username,
            password:self.password,
            
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        this.createClient = false;
        this.photo = "";
        this.name = "";
        this.email = "";
        this.username = "";
        this.password =""
      } else {
        console.log("Yo no deberia estar aqui");
      }
    },
}

}
</script>


<style scoped>

.register{
    margin-top:7rem;
    border:5px outset #40916c;
    background-color:rgb(145, 160, 158, 0.7);
    width:70%;
    margin-left:12rem;
}
.form{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:2rem;
}

.text{
    margin-bottom: 2rem;
    width:30%;
    height:2.5rem;
    border-radius:20rem;
    font-size:16px;
    border-color:greenyellow;
}

button {
  width: 9rem;
  height: 2.5rem;
  margin-right: 1rem;
  background-color: greenyellow;
  border:3px solid #40916c;
  border-radius: 20rem;
  margin-bottom:2rem;
}

button:hover{
  background-color : #40916c;
  border: 3px solid greenyellow;
  color:white;
  cursor:pointer;
}

</style>