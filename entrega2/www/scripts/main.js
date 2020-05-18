import {raffleshotel,conradintlhotel,damenlouhotel,shangrilahotel,swisshotel,removeButton,enviarReserva,eliminarReservas,crearReserva} from './utils.js'

// Listeners

raffleshotel.addEventListener("click",enviarReserva);
conradintlhotel.addEventListener("click",enviarReserva);
damenlouhotel.addEventListener("click",enviarReserva);
shangrilahotel.addEventListener("click",enviarReserva);
swisshotel.addEventListener("click",enviarReserva);
removeButton.addEventListener("click",eliminarReservas);
document.addEventListener('DOMContentLoaded', crearReserva(JSON.parse(localStorage.getItem('reservas'))))