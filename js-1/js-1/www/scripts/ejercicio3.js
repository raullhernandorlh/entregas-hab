// Ejercicio 3 - JS1

// Generar un contador de mensajes por usario
// Generar una lista con la siguiente estructura:


const usuario = ['Raul','Fran','Jorge','Jasone','Itxaso']
const title = ["Hoy va a ser un buen dia","Hello mundo","Hablamos de Javascript"];
const body= ['Hola,buenos dias',"Yujuuuu, ya es fin de semana","Typescript es lo que mola"];
let numeroAleatorio = Math.round(Math.random () * (title.length -1));




const post =
    {
        userId: `<userid>${numeroAleatorio}</userid>`,
        posts: [
            {
                title: `<title>${title[numeroAleatorio]}</title>`,
                body: `<body>${body[numeroAleatorio]}</body>`
            },
            {
                title: `<title>${title[numeroAleatorio]}</title>`,
                body: `<body>${body[numeroAleatorio]}</body>`
            },
        ]
    }

console.log(post);


for(i=0;i<5;i++){
    console.log(post);
}













