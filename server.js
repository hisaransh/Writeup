const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv/config');

//Import Routes
const tempRoute = require('./routes/temp');

const PORT = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({dev})

mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true},() =>
  console.log('connected to DB!!')
);
// const MongoClient = require('mongodb').MongoClient
// connectionString = "

const handle = nextApp.getRequestHandler()
// const mongoose = require('mongoose');
nextApp.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({extended:true}));
  server.use('/temp',tempRoute);
  server.get('*', (req,res) => {
      return handle(req,res);
  })

  server.listen ( PORT , err => {
    if(err) throw err;
    console.log('Server started at port ${PORT}')
    })
})
