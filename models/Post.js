const mongoose = require('mongoose'); 

// create schema, represent how the post will look (title tring, age int..). Use of object for validation rules
const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now 
    }
}); 

// To exports, 'Posts' will also be shown in Mlabs (mangoDB)
module.exports = mongoose.model('Posts', PostSchema)