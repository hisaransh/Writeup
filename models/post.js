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
})

modue.exports = mongoose.model('Posts',PostSchema);
