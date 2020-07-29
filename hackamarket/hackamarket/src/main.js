import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Importacion del modulo de la libreria de "vue-headful" para poder utilizar las funcionalidades de la misma en la aplicacion
import vueHeadful from 'vue-headful'

// Importamos la configuracion de el archivo de configuracion de iconos de "fontawesome"
import './icons'


Vue.component('vue-headful',vueHeadful)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
