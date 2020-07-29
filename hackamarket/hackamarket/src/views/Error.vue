
<template>
  <!-- Vista "Error" utilizada para mostrar el error cuando la no existe la pagina. La ruta no esta
  establecida en "router"-->
  <div>
    <vue-headful title="Error" />
    <div class="error">
      <h1>¿Are You The Time Traveler?</h1>
      <h2> ERROR 404 </h2>
      <img alt="Error 404" src="../assets/error-404/error404_image.jpg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Error"
};
</script>

<style scoped>
.error {
  padding-top:4%;
}

img{
    margin-top:40px;
    border:9px outset #40916c;

}
</style>