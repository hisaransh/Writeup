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
  },
  dateCreated: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('project',PostSchema);
