const mongoose = require('mongoose');

const SubheadlineSchema = mongoose.Schema({
  subheadlineName:{
    type:String
  },
  data:{
    type:String
  }
})

const HeadlineSchema = mongoose.Schema({
  headlineName:{
    type:String
  },
  subheadlines : [SubheadlineSchema]
})

const PostSchema = mongoose.Schema({
  projectName : {
    type:String,
    required:true
  },
  authorName : {
    type:String,
    required:true,
  },
  aboutProject : {
    type:String
  },
  dateCreated: {
    type: Date,
    default: Date.now
  },
  data : [HeadlineSchema]
})

module.exports = mongoose.model('project',PostSchema);
