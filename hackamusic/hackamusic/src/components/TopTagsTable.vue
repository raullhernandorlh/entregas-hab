<template>
<div>
  <input class ="input" type="search" v-model="search" placeholder="Search Your Tag By Name"/>
  <div class ="table-space">
    <table id="topTagsTable" class="center">
      <thead>
        <th>Name</th>
        <th>Url</th>
        <th>Reach</th>
        <th>Taggings</th>
        <th>Streamable</th>
      </thead>
      <tbody>
        <tr v-for="toptag in filtered" :key="toptag.id">
          <td>{{toptag.name}}</td>
          <td>{{toptag.url}}</td>
          <td>{{toptag.reach}}</td>
          <td>{{toptag.taggings}}</td>
          <td>{{toptag.streamable}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>
export default {
  name: "TopTagsTable",
  props: {
    topTags: Array,
    loading_spinner:false,
  },
  data() {
    return {
      search: "",
    };
  },

 computed: {
    // Te compara cada termino que meto con el nombre del personaje
    filtered() {
      if (!this.search) {
        return this.topTags;
      }
      return this.topTags.filter(topTag =>
        topTag.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  },
}
  
</script>


<style scoped>

  input{
    margin-top:25px;
    width:300px;
    height:40px;
    font-size:20px;
  }

  .table-space{
    margin-top:50px;
    margin-left:auto; 
    margin-right:auto;
    overflow:scroll;
    height:400px;
    width:750px;
  }

/* CSS Table */
  /* #topTagsTable{
    margin-top:10px;
  } */
  #topTagsTable td, #topTagsTable th {
  border: 1px solid #ddd;
  padding: 8px;
}

#topTagsTable tr:nth-child(even){background-color: #f2f2f2;}

#topTagsTable tr:hover {background-color: #ddd;}

#topTagsTable th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align:center;
  background-color: red;
  color: white;
}

</style>