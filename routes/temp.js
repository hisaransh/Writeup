const express = require('express');
// const nextRoutes = require('next-routes');
const router = express.Router()
const Post require('../models/post');

router.get('/' , (req,res) => {
  res.send("we are on temp");
});

router.post('/' , (req,res) => {
  console.log(req.body);

})

router.get('/insidetemp',(req,res)=>{
  res.send("We are inside temp inside inside");
})

module.exports = router;
