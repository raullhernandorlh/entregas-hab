// Archivo de configuracion utilizado para los iconos de "Fontawesome". Es recomendable no sobrecargar el "main.js" de configuraciones
// y por esta razon existe este archivo

import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Tutorial sacado de esta magnifica explicacion de YouTube - "Best Way to use Font Awesome in Vue"
//https://www.youtube.com/watch?v=YpPYo3hJBvU

// Es muy importante recalcar que en este punto podriamos importar todos los iconos pero por tiempos de carga estoy podria
// hacer que la aplicacion entera sufriera retrasos en cargas de paginas etc etc. Por esta razon se opta por IMPORTAR SOLO
// CADA UNO DE LOS ICONOS QUE VAYAMOS A UTILIZAR. ¿Como hacerlo? Sencillo: Si nos metemos a la pagina web de "fontawesome" ,
// bsucamos un icono y entramos en el se nos va expecificar la etiqueta html para incluir ese icono
//<i class="fab fa-500px"></i>. Lo que nos interesa de esto es la clase . En este caso lo que habria que incluir entre los "{}"
// para importar seria "fa500". En nuestro caso la etiqueta es de esta manera <i class="fab fa-bars"></i> asi que lo
// que incluimos es "faBars"


import { faBars } from '@fortawesome/free-solid-svg-icons'

// Añadimos a "library" los iconos que vayamos a utilizar en la aplicacion en este caso solo uno "faBars"
library.add(faBars)

Vue.component('fa-icon', FontAwesomeIcon);

// Por ultimo hay que enlazar este archivo de configuracion con el "main.js". Esto lo haremos en el "main.js"