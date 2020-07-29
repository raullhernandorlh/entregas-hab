<template>
    <div class="clients">
        <ul class="clients-list">
            <li v-for="(client,index) in clients" :key="client.id">
                <div class="data-client">
                    <p><img  :src="client.photo" /></p>
                    <p class="client-text"><span>Name </span>{{ client.nombre }}</p>
                    <p class="client-text"><span>Username </span>{{ client.usuario }}</p>
                    <p class="client-text"><span>Password </span>{{ client.password }}</p>
                    <p class="client-text"><span>Email </span>{{ client.email}}</p>
                
                    <div class="buttons">
                        <button @click="sendClientIndex(index)">Delete</button>
                        <button @click="sendDataClient(index)">Edit</button>
                    </div>
                </div>
            </li>
        </ul>
  </div>
</template>


<script>
export default {
    name:"SeeClients",
    props:{
        clients:Array
    },
    methods:{
        sendClientIndex(index){
            let clientIndex = this.clients[index].id;
            this.$emit('indexForDelete',clientIndex)
        },
        sendDataClient(index){
            let dataClient = this.clients[index]
            //Enviamos los datos del client a traves del evento "data"
            this.$emit('data',dataClient)
        }
    }
}
</script>


<style scoped>

.clients-list{
  display: flex;
  justify-content: space-around;
  list-style: none;
  flex-wrap: wrap;
  list-style: none;
}

.client-text{
  color:#1b4332;
}

.data-client {
  margin-bottom: 3rem;
  background-color:rgb(145, 160, 158, 0.7);
  border:9px outset #40916c;
  padding: 2rem;
}

.data-client img {
  margin-bottom: 0.5rem;
  border:4px outset #40916c;
  width: 350px;
  height:300px;
}

li {
  text-decoration: none;
}

button {
  width: 9rem;
  height: 2.5rem;
  margin-right: 1rem;
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

.buttons{
  margin-left:1rem;
}

p{
  font-size:18px;
  font-weight:700;
}

span{
  color:#fff;
  margin-right: 1.5rem;
}




</style>