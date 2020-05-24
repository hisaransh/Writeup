const mongoose = require('mongoose');

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
  }
})

module.exports = mongoose.model('project',PostSchema);
