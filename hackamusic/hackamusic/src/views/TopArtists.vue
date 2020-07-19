<template>
  <div class="topartist">
    <vue-headful title=" Top Artists" />
    <h1>Top Artists</h1>
    <spinner v-show="loading_spinner" />
    <topartiststable :artists="artists" v-show="table" />
  </div>
</template>


<script>

//IMPORTS
import api from "@/api/index.js";
import topartiststable from "@/components/TopArtistsTable.vue";
import spinner from "@/components/Spinner.vue";

export default {

  //Nombre de la vista
  name: "TopArtists",

  // Nombre del componente al cual va enlazada la vista
  components: {
    topartiststable,
    spinner
  },

  // Datos de la vista.
  data() {
    return {
      artists: [],
      loading_spinner: true,
      table: false
    }
  },

  methods: {
    activatespinner() {
      console.log("Hola");
      setTimeout(() => 
      {
        this.loading_spinner = false;
        this.table = true;
      }, 1000);
    },
  },
    //HOOK CREATED - Nos permite realizar una accion mientras se esta creando la aplicacion . Esto nos
    // permite, en este caso, poder cargar los datos de la api externa en la pagina antes de que esta se
    // carge
    created() {
      // En el array donde nos vienen los personajes (data), la informacion de los personajes esta en "results"
      api.getArtists().then(res => (this.artists = res.data.topartists.artist));
    },
    mounted() {
      this.activatespinner();
    }
};
</script>

<style scoped>
.topartist {
  padding-top: 130px;
}
</style>