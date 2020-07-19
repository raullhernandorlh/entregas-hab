<template>
  <div class="table-space">
    <input class ="input" type="search" v-model="search" placeholder="Search Your Artist By Name"/>
    <table id="topArtistsTable" class="center">
      <thead>
        <th>Name</th>
        <th>Listeners</th>
        <th>Web</th>
        <th>Image</th>
      </thead>
      <tbody>
        <tr v-for="artist in filtered" :key="artist.id">
          <td>{{artist.name}}</td>
          <td>{{artist.listeners}}</td>
          <td>{{artist.url}}</td>
          <td v-for="artist in artistimages" :key="artist.id">
            <p><img width=350px height="200px" :src="artist.url"/></p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TopArtistsTable",
  props: {
    artists: Array
  },
  data() {
    return {
      search: "",
      artistimages:[
        {url: 'https://p7.hiclipart.com/preview/310/893/100/singing-poster-cartoon-cartoon-singing-man-vector.jpg'}
      ]
    }
  },

  computed: {
    // Te compara cada termino que meto con el nombre del personaje
    filtered() {
      if (!this.search) {
        return this.artists;
      }
      return this.artists.filter(artist =>
        artist.name.toLowerCase().includes(this.search.toLowerCase())
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

  /* Esta clase permite crear un scroll alrededor de las tablas */
    .table-space{
    margin-top:50px;
    margin-left:auto; 
    margin-right:auto;
    overflow:scroll;
    height:550px;
    width:1000px;
  }

  table.center {
    margin-left:auto; 
    margin-right:auto;
    margin-top: 30px;
  }

  #topArtistsTable td, #topTagsTable th {
  border: 1px solid #ddd;
  padding: 8px;
}

#topArtistsTable tr:nth-child(even){background-color: #f2f2f2;}

#topArtistsTable tr:hover {background-color: #ddd;}



#topArtistsTable th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: red;
  color: white;
  text-align:center;
}
</style>