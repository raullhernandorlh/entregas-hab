// Variables 

const raffleshotel = document.getElementById("raffles-hotel");
const conradintlhotel = document.getElementById("conradintl-hotel");
const damenlouhotel = document.getElementById("damenlou-hotel");
const shangrilahotel = document.getElementById("shangrila-hotel");
const swisshotel = document.getElementById("swissotel-hotel");
const card = document.getElementById("hotel-card");
const removeButton = document.getElementById("remove-all");


// Funciones


const eliminarReservas = () =>{
    
    localStorage.clear();
    const reservas = cargarLocalStorage() || [];
    crearReserva(reservas);

}

const crearReserva = reservas =>{
    localStorage.setItem('reservas',JSON.stringify(reservas));
    card.innerHTML ="";
    reservas.forEach((reserva,i) =>{
        const div = document.createElement('div');
        div.classList = "divhotelcard";
        const img = document.createElement('img');
        img.src = reserva.photo;
        const title = document.createElement('p');
        title.textContent = reserva.name;
        title.classList ="cardtitle";
        const price = document.createElement('p');
        price.textContent = reserva.price;
        price.classList = "cardprice";
        const buttonDelete = document.createElement('button');
        buttonDelete.classList = "delete";
        buttonDelete.textContent = 'Delete Booking';
        buttonDelete.addEventListener("click",() => borrarLocalStorage(i));
        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(price);
        div.appendChild(buttonDelete);
        card.appendChild(div);
    })
}


const borrarLocalStorage = indice =>{
    const reservas = cargarLocalStorage();
    reservas.splice(indice,1);
    crearReserva(reservas);

}


const cargarLocalStorage = () =>{
    return JSON.parse(localStorage.getItem('reservas'));
}

const addLocalStorage = reserva =>{
    const reservas = cargarLocalStorage() || []
    const newreservas = [...reservas, reserva ];
    crearReserva(newreservas);
}



const enviarReserva = e =>{
    e.preventDefault();
    const parent = e.target.parentElement;
    const hotelImage = parent.querySelector('img').getAttribute('src');
    const hotelName = parent.querySelector('h4').innerText;
    const hotelPrice = parent.querySelector('h3').innerText;
    const reserva = { photo:hotelImage, name:hotelName, price:hotelPrice}
    addLocalStorage(reserva);
}


export {raffleshotel,conradintlhotel,damenlouhotel,shangrilahotel,swisshotel,removeButton,enviarReserva,eliminarReservas,crearReserva}