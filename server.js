const express = require('express');
const next = require('next');

const PORT = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({dev})

const handle = nextApp.getRequestHandler()

nextApp.prepare()
  .then( ()=>{
      const server = express();
      server.get('*', (req,res) => {
        return handle(req,res);
      })

      server.listen ( PORT , err => {
        if(err){
          throw err;
        }
        else{
          console.log('Server started at port ${PORT}')
        }
      })
      .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
      })
  })
