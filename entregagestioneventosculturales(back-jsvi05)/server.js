/**
 * Un cliente nos pide realizar un sistema para gestionar eventos culturales.
 * Necesita dar de alta eventos, que pueden ser de tipo 'concierto', 'teatro' o 
 * 'monólogo'. Cada uno se caracteriza por un 'nombre', 'aforo' y 'artista'.
 * Opcionalmente pueden incluir una descripción.
 * 
 * El cliente necesitará una API REST para añadir eventos y poder obtener
 * una lista de los existentes.
 * 
 * El objetivo del ejercicio es que traduzcas estos requisitos a una descripción
 * técnica, esto es, decidir qué endpoints hacen falta, qué parámetros y cuáles 
 * son los código de error a devolver
 * 
 * Notas:
 *    - el conocimiento necesario para realizarlo es el adquirido hasta la clase del
 *      miércoles
 *    - llega con un endpoint GET y otro POST
 *    - el almacenamiento será en memoria, por tanto cuando se cierre el servidor
 *      se perderán los datos. De momento es aceptable esto.
 * 
 */

const bodyParser = require('body-parser');
const express = require('express');

const app = express();


//Configuración de CORS.

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Middleware - BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Global Id(Used to delete, update multiple records or a specific record)

let globalId = 1;

// Cultural events (Object with all collections)

let culturalEvents = {
  'concerts': [],
  'theaters': [],
  'monologues': [],
}

// GET (Looking for all types of cultural events)

app.get('/culturalevents', (req, res) => {
  res.json(Object.keys(culturalEvents));
})


// Adding a new type of cultural event (EXTRA)
// Validations
// 1. Error if the body parameter is unexpected (400)
// 2. Error if the cultural event already exists (409)


app.post('/culturalevents', (req, res) => {
  const eventName = req.body.name;

  if (eventName !== undefined) {
    culturalEvents[eventName] = [];
    res.send();
  } else {
    res.status(400).send({ error: 'ERROR!! Unexpected body parameter' });
  }

  if (culturalEvents[eventName] == undefined && eventName !== undefined) {
    culturalEvents[eventName] = [];
    res.send();
  } else {
    res.status(409).send({ error: 'ERROR!! The event already exists' });
  }

})


// POST (Creating events)
// Name of body parameters : name, capacity, artist, description

app.post('/culturalevents/:event', (req, res) => {

  let eventParamsName = req.params.event;
  let eventBodyName = req.body.name;
  let eventBodyCapacity = req.body.capacity;
  let eventBodyArtist = req.body.artist;
  let eventBodyDescription = req.body.description;



  if (eventBodyName === undefined || eventBodyCapacity === undefined
    || eventBodyArtist === undefined || eventBodyDescription === undefined) {

    res.status(404).send({ error: 'ERROR!! One or more body parameters are not inserted correctly ' });
    return
  }

  if (eventParamsName === undefined) {
    res.status(404).send({ error: 'ERROR!! The event is not defined' });
    return
  }

  let data = {
    id: globalId++,
    name: req.body.name,
    capacity: req.body.capacity,
    artist: req.body.artist,
    datos: {
      description: req.body.description
    }
  }

  for (let event of culturalEvents[eventParamsName]) {
    if (event.name === data.name) {
      res.status(409).send("Duplicate Event");
      return
    }
  }
  culturalEvents[eventParamsName].push(data);
  res.send();


})

// Listing Events

app.get('/culturalevents/:event', (req, res) => {
  let eventName = req.params.event;
  res.json(culturalEvents[eventName]);
})


// Delete .Deleting Events (EXTRA)

app.delete('/culturalevents/:event/:id', (req, res) => {
  const eventName = req.params.event;

  //You have to parse the id that enters as a paramete
  const id = parseInt(req.params.id);

  if (culturalEvents[eventName] === undefined) {
    res.status(404).send();
    return;
  }

  if (culturalEvents[eventName].find(event => event.id === id) === undefined) {
    res.status(404).send();
    return;
  }

  culturalEvents[eventName] = culturalEvents[eventName].filter( event => event.id !== id);

  res.send();
});


// UPDATE (Updating Cultural Events) extra

app.put('/culturalevents/:event/:id', (req, res) => {
  const eventName = req.params.event;

  // When we generated the ID it was an integer, but in the URL comes as a chain
  const id = parseInt(req.params.id);

  if (culturalEvents[eventName] === undefined) {
    res.status(404).send({ error: 'ERROR!! The event is not defined' });
    return;
  }

  if (req.body.name === undefined ||
    req.body.capacity === undefined ||
    req.body.artist === undefined ||
    req.body.description === undefined) {
      res.status(400).send({"ERROR !!!One or more parameters of the body are not defined"});
      return;
    }

  let searchedElement = culturalEvents[eventName].find(event=> event.id === id);
  if (searchedElement === undefined) {
    res.status(404).send({ error: 'ERROR!! The event is not defined' });
    return;
  }

  searchedElement.name = req.body.name;
  searchedElement.capacity = req.body.capacity;
  searchedElement.artist = req.body.artist;
  searchedElement.description = req.body.description;

  res.send();
});

// PATCH (We update one or more records of an event) (EXTRA)

app.patch('/culturalevents/:event/:id', (req, res) => {
  const eventName = req.params.event;

  // When we generated the ID it was an integer, but in the URL comes as a chain
  const id = parseInt(req.params.id);

  if (culturalEvents[eventName] === undefined) {
    res.status(404).send();
    return;
  }

  let searchedElement = culturalEvents[eventName].find(event => event.id === id);
  if (searchedElement === undefined) {
    res.status(404).send({ error: 'ERROR!! The event is not defined' });
    return;
  }

  const bodyParams = Object.keys(req.body);

  for (let param of bodyParams) {
    searchedElement[param] = req.body[param];
  }

//  Object.keys(req.body).forEach(key => {
//    searchedElement[key] = req.body[key];
//  })

  res.send();
});



app.listen(8000);


