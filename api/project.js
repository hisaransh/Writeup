const express = require('express');
// const nextRoutes = require('next-routes');
const router = express.Router()
const Project = require('../models/writeup');
const mongoose = require('mongoose');
//Get all the post
router.get('/project' , async (req,res) => {
  console.log("GET request Recieved in api");
  try{
    const posts = await Project.find();
    res.json(posts);
  }catch(err){
    res.json({message:err});
  }
});
router.post("/project/projectbyid", async(req,res) => {
  let pid = req.body.pid;
  console.log(req.body);
  console.log("Post request for a project");
  try{
    const post = await Project.findById(pid);
    res.json(post);
  }catch(err){
    res.json({message:err});
  }
})

// Add a HeadlineName
router.post('/project/newHeadline' , async(req,res) => {
  let pid = req.body.pid;
  let headlineName = req.body.headlineTitle;
  if(pid == null || headlineName == null || headlineName == "" || pid == ""){
    res.json({message : "Error in Headline Name or Project Id. Cannot be added!!"})
    return;
  }
  let data = {
    "headlineName" : headlineName
  }
  // console.log(data);
  try{
    const post = await Project.findById(pid);
    post.data.push(data);
    const savedPost = await post.save();
    console.log("-----");
    console.log(savedPost);
    res.json(savedPost);
  }catch(err){
    res.json({message:err});
  }
})

router.post('/project/newSubheadline', async(req,res) => {
  let pid = req.body.pid;
  let headlineid = req.body.headlineid;
  console.log(pid,headlineid);
  let subheadlineName = req.body.subheadlineTitle;
  if(pid == null || headlineid == null || headlineid == "" || pid == "" || subheadlineName == null || subheadlineName == ""){
    res.json({message : "Error in Headline Name or Project Id. Cannot be added!!"})
    return;
  }

  let subdata = {
    "subheadlineName" : subheadlineName,
    "data":'[{"type":"paragraph","children":[{"text":"Start Here!!"}]}]'
  }

  try{
      const d = await Project.findOne({'_id':pid})
      if(d == null){
        res.json({message : "Not found"})
        return;
      }
      const dt = d.data;
      if(dt == null){
        res.json({message : "Not found"})
        return;
      }
      const result = dt.find( t => t._id == headlineid );
      if(result == null){
        res.json({message : "Not found"})
        return;
      }
      result.subheadlines.push(subdata);
      const post = await d.save();
      res.json({post});

  }catch(err){
    console.log(err);
    res.json({message:err});
  }

})

//Submits  a post
router.post('/project' , async (req,res) => {
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
