<template>
    <div>
    <footer>
      <p class = "copyright">© Copyright 2020 Hack A Market. All rights reserved.</p>
      <p>Author: Raul Lopez Hernando</p>
    </footer>
  </div>
</template>

<script>
export default {
    name:"FooterCustom"
}
</script>

<style scoped>

footer{
  position: fixed; 
  left: 0;
  bottom: 0;
  width: 100%;
  background-color:#40916c;
  color: #fff;
  text-align: center;
  height:70px;
  font-weight: bold;

}
.copyright{padding-top:20px;}

a{font-size:15px;}


</style>