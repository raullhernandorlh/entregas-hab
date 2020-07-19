<template>
  <div class="about">
    <div>
      <img class="img_programador" src="../assets/avatar_programador.png" alt="Avatar_Programmer" />
      <div class="container">
        <h4>
          <b>Raul Lopez Hernando (JS Developer)</b>
        </h4>
        <table class="technologies">
          <thead>
            <th>Technologie</th>
            <th>Logo</th>
          </thead>
          <tbody>
            <tr>
              <td>Vue</td>
              <td>
                <button @click="technologiesInformation(1)">
                  <img class="img_logo" src="../assets/technologies_logo/vue_logo.jpg" alt="Logo_Vue"/>
                </button>
              </td>
            </tr>
            <tr>
              <td>Javascript</td>
              <td>
                <button @click="technologiesInformation(2)">
                  <img class="img_logo" src="../assets/technologies_logo/javascript_logo.png" alt="Logo_Javascript"/>
                </button>
              </td>
            </tr>
            <tr>
              <td>Node JS</td>
              <td>
                <button @click="technologiesInformation(3)">
                  <img class="img_logo" src="../assets/technologies_logo/nodejs_logo.png" alt="Logo_Vue"/>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <table class="technologies">
          <thead>
            <th>JS Librarie</th>
            <th>Logo</th>
          </thead>
          <tbody>
            <tr>
              <td>Vue Headful</td>
              <td><img class="img_logo" src="../assets/technologies_logo/vue_logo.jpg" alt="Logo_VueHeadful"/></td>
            </tr>
            <tr>
              <td>Axios</td>
              <td><img class="img_logo" src="../assets/libraries_logo/axios_logo.png" alt="Logo_Axios"/></td>
            </tr>
            <tr>
              <td>Sweet Alert 2</td>
              <td><img class="img_logo" src="../assets/libraries_logo/sweetalert2_logo.jpg" alt="Logo_SweetAlert2"/></td>
            </tr>
          </tbody>
       </table>
      </div>
    </div>
  </div>
</template>

<script>
// Import de libreria "sweetalert" utilizada para mostrar informacion de las tecnologias
import Swal from 'sweetalert2'
export default {
  name: "About",
  methods: {
    technologiesInformation(index) {

       if(index === 1){
          Swal.fire({
            imageUrl: "https://e7.pngegg.com/pngimages/740/37/png-clipart-vue-js-diagram-template-biological-life-cycle-instance-vuejs-template-text.png",
            imageHeight: 700,
            imageWidth: 900,
            imageAlt: "Vue Information"
       });
      }

      if(index === 2){
          Swal.fire({
            imageUrl: "https://edteam-media.s3.amazonaws.com/community/original/8e771ddc-0f23-4ceb-ac52-445a6567271b.jpg",
            imageHeight: 700,
            imageWidth: 700,
            imageAlt: "JavascriptInformation"
       });
      }

      if(index === 3){
          Swal.fire({
            imageUrl: "https://i.pinimg.com/originals/1b/d1/10/1bd11021e5b1e6a189c42bf4b83b1967.jpg",
            imageHeight: 700,
            imageWidth: 700,
            imageAlt: "Node JS Information"
       });
      }
     
    }
  }
}
</script>

<style scoped >
.about{
   padding-top: 140px; 
}

.technologies td,
.tecnologies th {
  border: 1px solid #ddd;
  padding: 8px;
  width: 330px;
  height: 100px;
}

.technologies tr:nth-child(even) {
  background-color: #f2f2f2;
}

.technologies tr:hover {
  background-color: #ddd;
}

.technologies th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: red;
  color: white;
  text-align: center;
}

.technologies {
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
}

.img_logo {
  width: 200px;
  height: 120px;
}

.img_programador {
  width: 200px;
  height: 200px;
}

.technologies{
  float:left;
  margin-left:150px;
}
.libraries {
  text-align: center;
  float:right;
  margin-right:250px;
  margin-top:150px;
}


</style>
