<template>
  <div>
    <footer>
      <p class = "copyright">© Copyright 2020 Hack A Music. All rights reserved.</p>
      <p>Author: Raul Lopez Hernando</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "FooterCustom"
};
</script>

<style scoped>
/* scoped sirve para especificar que estos estilos se aplican solo a este componente */
footer{
  position: fixed; 
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: red; 
  color: white;
  text-align: center;
  height:70px;

}
.copyright{
    padding-top:20px;
}

a{
    color:white;
    font-size:15px;
}

</style>