// Ejercicio 3 - JS1

// Generar un contador de mensajes por usario
// Generar una lista con la siguiente estructura:

const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts')
         .then((posts) => {
             const usuarios = [];
             const resultados = [];
             const comentario ={};
             const result ={};
             const objetoContador = {};
             const datos = posts.data;
            //  console.log(datos);
             for(let post of datos){
                 if(objetoContador[post.userId]){
                    objetoContador[post.userId]++
                 }else{
                    objetoContador[post.userId] =1; 
                 }
                 if(usuarios.indexOf(post.userId) !=-1){
                    comentario.title = post.title;
                    comentario.body = post.body;
                    resultados[usuarios.indexOf(post.userId)].posts.push(comentario);

                    
                 }else{
                    usuarios.push(post.userId);
                    result.userId = post.userId;
                    comentario.title = post.title;
                    comentario.body = post.body;
                    result.posts = [comentario];
                    resultados.push(result);
                    // console.log(usuarios);
                    // console.log(resultados);
                 }
             }
             console.log(objetoContador);
             console.log(resultados);
             console.log()
             console.dir(resultados,{depth : null});
         })


// const listaDeMensajes = [];
// const title = ["Hoy va a ser un buen dia","Hello mundo","Hablamos de Javascript"];
// const body= ['Hola,buenos dias',"Yujuuuu, ya es fin de semana","Typescript es lo que mola"];
// let numeroAleatorio = Math.round(Math.random () * (title.length -1));




// const post =
//     {
//         userId: ,
//         posts: [
//             {
//                 title: ,
//                 body: 
//             },
//             {
//                 title: ,
//                 body:  ,
//             },
//         ]
//     }

// console.log(post);

// let contador = 0;
// for(i=0;i<5;i++){
//     listaDeMensajes.push()
//     contador++;
// }

// console.log(listaDeMensajes.length);
// console.log(contador);













