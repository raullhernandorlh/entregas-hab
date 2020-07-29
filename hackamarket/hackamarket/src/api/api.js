//Declaracion de las librerias instaladas a usar en este archivo

const express = require('express')

const cors = require('cors')

const bodyParser = require('body-parser')

const mysql = require('mysql')

const app = express()

// Ejecucciones de Express

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


// Conexion a la BBDD

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database:'hackamarket'
})

// Realizando la conexion

connection.connect( error => {
    if(error) throw error
    console.log('DATABASE UP')
})

// Conexion a la API

const PORT = 3050;

app.listen(PORT,() => console.log('API UP'))



// OBTERNER todos los PRODUCTOS de la BBDD

app.get('/products',(req,res) => {
    const sql = 'SELECT * from listaproductos'
    connection.query(sql,(error,results) => {
        if(error) throw error
        if(results.length > 0){
            res.json(results)
        }else{
            console.log('No hay productos que mostrar');
        }
    })
})

// OBTERNER todos los CLIENTES de la BBDD

app.get('/clients',(req,res) => {
    const sql = 'SELECT * from listaclientes'
    connection.query(sql,(error,results) => {
        if(error) throw error
        if(results.length > 0){
            res.json(results)
        }else{
            console.log('No hay clientes que mostrar');
        }
    })
})


// AÑADIR CLIENTE a la BBDD

app.post('/add',(req,res) => {

    const sql = 'INSERT INTO listaclientes SET ?'

    // * Importante - Cada una de los atributos que tienen por delante los dos ":" corresponden al nombre
    // de las columnas de la tabla de la base de datos
    
    const newClient = {
        photo: req.body.photo,
        nombre: req.body.name,
        email: req.body.email,
        usuario: req.body.username,
        password: req.body.password,
    }

    //Conexion a la BBDD

    connection.query(sql,newClient,error =>{
        if(error) throw error
        console.log('Client Succesfully Added')
    })

})

//ELIMINAR CLIENTE de la BBDD

app.delete("/delete/:id",(req,res) =>{
    const id = req.params.id;
    const sql = `DELETE FROM listaclientes WHERE id=${id}`
    connection.query(sql,error => {
        if(error) throw error
        console.log(`Delete Client ${id}`)
    })
})

//ACTUALIZAR CLIENTE  de la BBDD

app.put('/update/:id',(req,res) => {

// Datos que recibimos de la vista

    const id = req.params.id;
    const photo = req.body.photo;
    const name = req.body.name;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;


    const sql = `UPDATE listaclientes SET nombre='${name}', usuario='${username}', password='${password}', email='${email}', photo='${photo}' WHERE id=${id} `

    // Conexion a la BBDD

    connection.query(sql,error =>{
        if(error) throw error
        console.log('Cliente actualizado con exito')
    })
})



