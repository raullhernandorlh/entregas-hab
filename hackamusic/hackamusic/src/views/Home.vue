<template>
  <div class="home">
    <vue-headful title=" Home Hack A Music"/>
    <img alt="LastFm Logo" src="../assets/hackamusic_logo/hackAMusicLogo.png" /><br/>
    <spinner v-show="loading_spinner" />
    <toptagstable :topTags="topTags" v-show="table" />
  </div>
</template>

<script>
import api from "@/api/index.js";
import Swal from 'sweetalert2';

// IMPORTANDO MIS COMPONENTE "TopTagsTable" y "Spinner"
import spinner from '@/components/Spinner.vue'
import toptagstable from "@/components/TopTagsTable.vue";

export default {
  name: "Home",
  components: {
    toptagstable,
    spinner
  },
  data() {
    return {
      topTags: [],
      loading_spinner:true,
      table:false
    };
  },
  methods:{
      activatespinner(){

        setTimeout( () =>
        { 
          this.loading_spinner = false; 
          this.table = true;

        }, 1000);
      }
  },

  // HOOK
  created() {
  
    console.log("Created");
    // En el array donde nos vienen los artistas del data (data), la informacion de los personajes esta en "results"
    api.getTopTags().then(res => (this.topTags = res.data.tags.tag));
   
  },

  mounted(){
     this.activatespinner()
  }
};
</script>

<style scoped>

.home{
   padding-top: 100px; 
}

img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 300px;
}

</style>
