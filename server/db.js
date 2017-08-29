const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/blog');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
    console.log('Mongo connection successed');  
});

// 单个文章
const blogSchema = new Schema({

    title: String,
    publish_date: String,
    author: String,
    tags:[
        {
            name: String 
        }
    ],
    description: String,
    content: String    
});

// 标签
const tagSchema = new Schema({

    blogs: [
        {
            blog_id: String 
        }
    ],
    name: String 
        
});

const models = {
    Blog: mongoose.model('Blog', blogSchema),
    Tag: mongoose.model('Tag', tagSchema),
};

module.exports = models;