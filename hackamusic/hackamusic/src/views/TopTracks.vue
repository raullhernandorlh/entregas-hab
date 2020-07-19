<template>
    <div class="toptrack">
        <vue-headful title=" Top Tracks"/>
        <h1>Top Tracks</h1>
        <spinner v-show="loading_spinner" />
        <toptrackstable :topTracks="topTracks" v-show="table" />
    </div>
</template>

<script>

//IMPORTS 
import api from '@/api/index.js'
import toptrackstable from '@/components/TopTracksTable.vue'
import spinner from '@/components/Spinner.vue'

export default {

    //Nombre de la vista
    name:"TopTracks",

    // Nombre del componente al cual va enlazada la vista
    components: {
    toptrackstable,
    spinner
  },
  
  // Datos de la vista
  data(){
    return {
      topTracks:[],
      loading_spinner:true,
      table:false
    }
  },

  // Metodo "activatespinner" utilizado para establecer el tiempor de duracion del "spinner"
  methods:{
    activatespinner(){
      setTimeout( () =>
        { 
          this.loading_spinner = false; 
          this.table = true;
        }, 1000);
      }
  },

  //HOOK CREATED - Nos permite realizar una accion mientras se esta creando la aplicacion . Esto nos
  // permite, en este caso, poder cargar los datos de la api externa en la pagina antes de que esta se
  // carge

    created(){
    // En el array donde nos vienen los personajes (data), la informacion de los personajes esta en "results"
    api.getTopTracks().then(res =>(this.topTracks = res.data.tracks.track));
    },

    // Hook "mounted". Utilizado para ejecutar el spinner una vez la app ya esta montada
    mounted(){
     this.activatespinner()
    }
}
</script>

<style scoped>

.toptrack{
   padding-top: 120px; 
}

</style>