// Saving instance of Required Modules
const express = require('express');
const next = require('next');
// Body parser is used to show API request data on server
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//Environment Variable are saved here
require('dotenv/config');

//Import Routes for API
const apiRoute = require('./api/project');

// PORT NO:
const PORT = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({dev})

mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true},() =>
  console.log('connected to DB!!')
);

const handle = nextApp.getRequestHandler()

nextApp.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({extended:true}));

  server.use('/api',apiRoute);

  //Routing all the url which are not in express to NEXTJS
  server.get('*', (req,res) => {
      return handle(req,res);
  })

  // Crearing Server

  server.listen ( PORT , err => {
    if(err) throw err;
    console.log('Server started at port ${PORT}')
    })

})
