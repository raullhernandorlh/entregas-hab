//Imported libraries

require('dotenv').config()
const axios = require('axios');
const bodyParser = require('body-parser');
const config = require('config');
const express = require ('express');
const winston = require('winston');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

//Environment variable used for the app port
const port = process.env.PORT;

//Middlewares

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());