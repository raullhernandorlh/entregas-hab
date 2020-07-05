/**
 * Una tienda quiere ofrecer sus servicios online. 
 * Para ello se dispone a digitalizar su catálogo y mostrarlo 
 * en una web. Nos piden realizar la parte de backend, que debe
 * permitir añadir y modificar productos, para lo cual será 
 * necesario que el usuario esté autenticado; y permitirá también 
 * listar los productos existentes, que se podrá acceder 
 * libremente.
 * 
 * Notas:
 *   - no se pueden dar de alta usuarios. Deberá existir uno por
 * defecto para las tareas de administración.
 *   - la lista de productos puede llegar a ser muy grande, así 
 * que el usuario deberá poder filtrarla mediante parámetros
 * enviados en la `querystring`
 *   - la estructura de un producto es la siguiente:
 *       {
 *           name: '',
 *           stock: <número de productos disponibles de este modelo>
 *           precio: 100
 *       }
 */

// IMPORTANTE LEER !!!!--- Para probar el funcionamiento de la aplicacion es necesario meter 
// un segundo parametro al ejecutar node a modo de contraseña. Vale cualquier contraseña. 
// Ejemplo - "node index.js 1234"


//Imported libraries

require('dotenv').config()
const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

//Importamos los metodos necesarios

 const {login} = require('./controllers/user');
 const {add,list,put} = require ('./controllers/products');
 const {isAuthenticated} = require ('./middlewares/auth')

//Environment variable used for the app port

const port = process.env.PORT;

//Middlewares

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// Endpoints

app.post('/user/login/', login)

app.post('/product/add',isAuthenticated, add);

app.get('/product/list/', list);

app.put('/product/update/:id',isAuthenticated,put);

// Custom error messages

app.use((error, req, res, next) => {
    res
        .status(error.status || 500)
        .send({status: 'error', message: error.message})
})



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});


