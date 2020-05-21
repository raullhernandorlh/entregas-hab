// Ejercicio 3 - JS1

// Generar un contador de mensajes por usario
// Generar una lista con la siguiente estructura:


const axios = require('axios');
const data = axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((posts) =>{
                function getUserMessages(userId){
                    let userPosts =posts.filter(post => post.userId = userId)
                    return userPosts
                }
                getUserMessages(1)
            })
        
                
              
            




// const axios = require('axios');

// axios.get('https://jsonplaceholder.typicode.com/posts')
//          .then((posts) => {
//              const usuarios = [];
//              const resultados = [];
//              const comentario ={};
//              const result ={};
//              const objetoContador = {};
//              const datos = posts.data;
//             //  console.log(datos);
//              for(let post of datos){
//                  if(objetoContador[post.userId]){
//                     objetoContador[post.userId]++
//                  }else{
//                     objetoContador[post.userId] =1; 
//                  }
//                  if(usuarios.indexOf(post.userId) !=-1){
//                     comentario.title = post.title;
//                     comentario.body = post.body;
//                     resultados[usuarios.indexOf(post.userId)].posts.push(comentario);

                    
//                  }else{
//                     usuarios.push(post.userId);
//                     result.userId = post.userId;
//                     comentario.title = post.title;
//                     comentario.body = post.body;
//                     result.posts = [comentario];
//                     resultados.push(result);
//                     // console.log(usuarios);
//                     // console.log(resultados);
//                  }
//              }
//              console.log(objetoContador);
//              console.log(resultados);
//              console.log()
//              console.dir(resultados,{depth : null});
//          })









