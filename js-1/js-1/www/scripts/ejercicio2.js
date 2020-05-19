// Ejercicio 2 - JS1

// Escribe el código necesario para decidir en qué fotografías sale Pablo. 
// Como resultado se debe obtener un array de strings con los nombres de las fotografías.

const photos = [{
        name: 'Cumpleaños de 13',
        people: ['Maria', 'Pablo']
    },
    {
        name: 'Fiesta en la playa',
        people: ['Pablo', 'Marcos']
    },
    {
        name: 'Graduación',
        people: ['Maria', 'Lorenzo']
    },
];



const namePhotosPablo = photos.map(function(photo){

    for (let people of photo.people){
        if(people === 'Pablo'){
            return photo.name
        }
    }
})
  

console.log(namePhotosPablo);


  
  

// const resultado1 = photos.map((photo) => console.log(photo.people))


// const resultado = photos.find( (photo,index) => photo.people === 'Pablo' );
// console.log(resultado);
