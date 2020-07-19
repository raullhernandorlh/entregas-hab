<template>
  <div class="table-space">
    <input class ="input" type="search" v-model="search" placeholder="Search Your Track By Name"/>
    <table id="topTracksTable" class="center">
      <thead>
        <th>Track Name</th>
        <th>Artist</th>
        <th>Duration</th>
        <th>Listeners</th>
        <th>Image</th>
      </thead>
      <tbody>
        <tr v-for="toptrack in filtered" :key="toptrack.id">
          <td>{{toptrack.name}}</td>
          <td>{{toptrack.artist.name}}</td>
          <td>{{toptrack.duration}}</td>
          <td>{{toptrack.listeners}}</td>
          <p><img :src="toptrack.image[2]['#text']"></p>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TopTracksTable",
  props: {
    topTracks: Array
  },
  data() {
    return {
      search:"",
    };
  },
  computed: {
    // Te compara cada termino que meto con el nombre del personaje
    filtered() {
      if (!this.search) {
        return this.topTracks;
      }
      return this.topTracks.filter(topTrack =>
        (topTrack.name.toLowerCase().includes(this.search.toLowerCase()))
      );
    }
  },

};
</script>


<style scoped>

  input{
    width:300px;
    height:40px;
    font-size:20px;
  }

  .table-space{
    margin-top:50px;
    margin-left:auto; 
    margin-right:auto;
    overflow:scroll;
    height:600px;
    width:800px;
  }

  table.center {
    margin-left:auto; 
    margin-right:auto;
    margin-top: 30px;
  }

  #topTagsTable td, #topTagsTable th {
  border: 1px solid #ddd;
  padding: 8px;
}

#topTracksTable tr:nth-child(even){background-color: #f2f2f2;}

#topTracksTable tr:hover {background-color: #ddd;}

#topTracksTable th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: red;
  color: white;
  text-align: center;
}

</style>