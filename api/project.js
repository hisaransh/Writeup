const express = require('express');
// const nextRoutes = require('next-routes');
const router = express.Router()
const Project = require('../models/writeup');

//Get all the post
router.get('/' , async (req,res) => {
  console.log("GET request Recieved in api");
  try{
    const posts = await Project.find();
    res.json(posts);
  }catch(err){
    res.json({message:err});
  }
});

//Submits  a post
router.post('/' , async (req,res) => {
  console.log("Post request Recieved at api");
  console.log(req.body);
  const post = new Project({
    "projectName" : req.body.projectName,
    "authorName" : req.body.authorName,
  })
  try{
    const savedPost = await post.save();
    console.log(savedPost);
    res.json(savedPost);
  }catch(err){
    console.log(err);
    res.json({message:err});
  }

  //Without using async await
  // post.save()
  // .then(data => {
  //   res.json(data);
  // })
  // .catch(err => {
  //   res.json({message: err});
  // })
})

// router.get('/insidetemp',(req,res)=>{
//   res.send("We are inside temp inside inside");
// })
//
// // Get a aspecific posts
// router.get('/:postId' , (req,res) => {
//   console.log(req.params.postId);
// })
//
// //Delete post
// router.delete('/:postId' , async (req,res) => {
//   try{
//     const removedPost = await Post.remove({_id:req.params.postId});
//     res.json(removedPost);
//   }catch(err){
//     res.json({message:err});
//   }
// })
//
// //Update posts
// router.patch('/:postId' , async (req,res) => {
//   try{
//     const updatePost = await Post.updateOne({_id:req.params.postId},{$set : {projectName:req.body.title}})
//     res.json(updatePost);
//   }catch(err){
//     res.json({message:err});
//   }
// })

module.exports = router;
