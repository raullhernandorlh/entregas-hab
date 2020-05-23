// Ejercicio 3 - JS1

// Generar un contador de mensajes por usario
// Generar una lista con la siguiente estructura:


const axios = require('axios');

// Información de los posts.
async function getPosts() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
  return response.data;
}

// Número de posts publicados por un usuario.
async function countUserMessages(userId) {
  const posts = await getPosts();
  return posts.filter((post) => post.userId === userId).length;
}

// Devolver un objeto con el id del usuario y todos sus post.
async function getUserAndAllPosts(userId) {
  const posts = await getPosts();
  const userPosts = posts.filter((post) => post.userId === userId);
  const myUser = {
    userId: userId,
    posts: []  
  }
  for (const post of userPosts) {
    myUser.posts.push({
      title: post.title,
      body: post.body
    })
  } 
  return myUser;
}

// IIFE.
(async() => {
  const result = await (getUserAndAllPosts(1));
  console.log(result);
})();



// Segunda solucion del ejercicio

// const axios = require('axios');

        



//             function countUserMessages(userId) {
//               const data = axios.get('https://jsonplaceholder.typicode.com/posts')
//                 .then((posts) => {
//                   return posts.data.filter((post) => post.userId === userId)
//                 })
//               return data;
//               // Podríamos hacer aquí un "console.log" de "data" en lugar de "return" y nos ahorramos la IIFE.
//             }
            
//             (async() => {
//               const result = await (countUserMessages(1));
//               console.log(result);
//             })();
        
                
              
            




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









