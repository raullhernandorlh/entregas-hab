<template>
  <div class="about">
    <div class ="container">
      <vue-headful title=" About" />
       <h2>
          <b>Raul Lopez Hernando (JS Developer)</b>
        </h2>
        <div class= "technologies_information">
          <h3> Tecnologies Information</h3>
            <ul>
              <li><button @click="alertJavascript()">Javascript</button></li>
              <li><button @click="alertNodeJS()">NodeJS</button></li>
              <li><button @click="alertVue()">Vue</button></li>
              <li><button @click="alertCSS()">CSS</button></li>
              <li><button @click="alertHTML()">HTML</button></li>
            </ul>
        </div>
        <div class= "javascript_libraries">
          <h3>Javascript Libraries</h3>
            <ul>
              <li><button @click="alertAxios()">Axios</button></li>
              <li><button @click="alertMySql()">MySql</button></li>
              <li><button @click="alertSweetAlert2()">SweetAlert2</button></li>
              <li><button @click="alertCors()">Cors</button></li>
              <li><button @click="alertVueHeadful()">Vue-Headful</button></li>
            </ul>
        </div>
    </div> 
  </div>
</template>


<script>

import Swal from "sweetalert2"

export default {
  name:"About",
  methods:{

    // Techonologis Sweet Alert Modals

     alertJavascript(){
      Swal.fire({
      text: 'JavaScript , often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.',
      imageUrl: 'http://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/240px-Unofficial_JavaScript_logo_2.svg.png',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Javascript',
      })
    },

    alertNodeJS(){
      Swal.fire({
      text: 'Node.js is an open-source, cross-platform, JavaScript runtime environment (Framework) that executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the users web browser. Consequently, Node.js represents a JavaScript everywhere paradigm,unifying web-application development around a single programming language, rather than different languages for server- and client-side scripts',
      imageUrl: 'https://www.luiztools.com.br/wp-content/uploads/2017/03/nodejs-logo.png',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Javascript',
      })
    },

    alertVue(){
      Swal.fire({
      title: 'Vue',
      text: 'Vue.js is an open-source model–view–viewmodel JavaScript framework for building user interfaces and single-page applications .',
      imageUrl: 'https://isl.co/wp-content/uploads/2016/07/vue-logo.png',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Javascript',
      })
    },

    alertCSS(){
      Swal.fire({
      text: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript',
      imageUrl: 'https://i2.wp.com/www.worldeatingdisordersday.org/wp-content/uploads/2016/03/css-logo.png',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Javascript',
      })
    },

    alertHTML(){
      Swal.fire({
      text: 'Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.',
      imageUrl: 'https://www.fullstackpython.com/img/logos/html.jpg',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Javascript',
      })
    },




    // JS Libraries SweetAlert Modals
    alertAxios(){
      Swal.fire({
      text: 'Axios is a Javascript library used to make HTTP requests from node.js or XMLHttpRequests from the browser that also supports the ES6 Promise API',
      imageUrl: 'https://cdn.cjr.org/wp-content/uploads/2017/01/jim_vandehei_axios.png',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Axios (JS Librarie)',
      })
    },

    alertSweetAlert2(){
      Swal.fire({
      text: 'A BEAUTIFUL, RESPONSIVE, CUSTOMIZABLE, ACCESSIBLE (WAI-ARIA) REPLACEMENT FOR JAVASCRIPTS POPUP BOXES',
      imageUrl: 'https://lmn-blog.com/wp-content/uploads/2018/03/logo-sweetalert2.png',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'SweetAlert 2 (JS Librarie)',
      })
    },

    alertMySql(){
      Swal.fire({
      title: 'MySql',
      text: 'MySQL is an open-source relational database management system (RDBMS)',
      imageUrl: 'http://sqlbackupandftp.com/blog/wp-content/uploads/2015/01/mysql-logo_2800x2800_pixels1.png',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'MySql (JS Librarie)',
      })
    },

    alertCors(){
      Swal.fire({
      title: 'Cors',
      text: 'CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.',
      imageUrl: 'http://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/240px-Unofficial_JavaScript_logo_2.svg.png',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Cors (JS Librarie)',
      })
    },

    alertVueHeadful(){
      Swal.fire({
      title: 'Vue-Headful',
      text: 'Vue-headful is a tiny wrapper around Headful, a generic library to set meta tags with JavaScript',
      imageUrl: 'http://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/240px-Unofficial_JavaScript_logo_2.svg.png',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Vue Headful (JS Librarie)',
      })
    },

  }
}
</script>


<style scoped>


.container{
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:40%;
  margin-left:25%;
  margin-top:5rem;
  background-color:rgb(145, 160, 158, 0.7);
  border:9px outset #40916c;
}


.technologies_information{
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;

}

.technologies_information li{
  list-style: none;
  margin-bottom:1rem;
}

.javascript_libraries ul{
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
}

.javascript_libraries li{
  list-style: none;
  margin-bottom:1rem;
}

button{
  width:7rem;
  height:2rem;
  border-radius:20rem;
  background-color:#40916c;
  border:2px solid yellowgreen;
  cursor:pointer;
  font-weight: bold;
}

button:hover{
  background-color:yellowgreen;
  border:3px solid #40916c;
}





</style>
