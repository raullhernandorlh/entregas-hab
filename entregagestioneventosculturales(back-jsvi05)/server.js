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

// Cultural events (Object with all collections)

let culturalEvents = {
  'concerts': [],
  'theaters': [],
  'monologues': [],
}

// Looking for all types of cultural events

app.get('/culturalevents', (req, res) => {
  res.json(Object.keys(culturalEvents));
})


// Adding a new type of cultural event (EXTRA)
// Validations
// 1. Error if the body parameter is unexpected (400)
// 2. Error if the cultural event already exists (409)


app.post('/culturalevents', (req, res) => {
  const eventName = req.body.name;

  // TODO Preguntar duda a Andres porque me detecta que el evento esta creado pero
  // no me manda el fallo 

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


// Creating events

app.post('/culturalevents/:event', (req, res) => {
  let eventParamsName = req.params.event;
  // let eventBodyName = req.body.name;
  // let eventBodyCapacity = req.body.capacity;
  // let eventBodyArtist = req.body.artist;
  // let eventBodyDescription = req.body.description;

  // TODO: comprobar si el tipo de evento existe (404)
  // TODO: comprobar si alguno de los parametros del body esta correctamente insertado(404)
  // TODO : comprobar si el nombre del evento existe 


  // if (eventBodyName !== undefined || eventBodyCapacity !== undefined
  //   || eventBodyArtist !== undefined || eventBodyDescription !== undefined) {
  //   let data = {
  //     name: req.body.name,
  //     capacity: req.body.capacity,
  //     artist: req.body.artist,
  //     datos: {
  //       description: req.body.description
  //     }
  //   }
  //   culturalEvents[eventParamsName].push(data);
  //   res.send();
  // } else {
  //   res.status(404).send({ error: 'ERROR!! One or more body parameters are not inserted correctly ' });
  // }

  if (eventParamsName !== undefined) {
    let data = {
      name: req.body.name,
      capacity: req.body.capacity,
      artist: req.body.artist,
      datos: {
        description: req.body.description
      }
    }
    culturalEvents[eventParamsName].push(data);
    listingculturalevents = culturalEvents.map((events)=>console.log(events))
    res.send();

  } else {
    res.status(404).send();
  }

})

// Listing Events

app.get('/culturalevents/:event', (req, res) => {
  let eventName = req.params.event;
  res.json(culturalEvents[eventName]);
})

app.listen(8000);


