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
    success: Boolean,
    data: {
        title: String,
        publish_date: String,
        tags:[
            {
                tag_id: String,
                name: String,
            }
        ],
        description: String,
        content: String,
        blog_id: String,       
    },

});

// 标签
const tagsSchema = new Schema({
    success: Boolean,
    totalNumber: Number,
    data: [
        {
            tag_id: String,
            blogs: [
                {
                   blog_id: String, 
                }
            ],
            name: String,
        }
    ],   
});

const models = {
    Blog: mongoose.model('Blog', blogSchema),
    Tags: mongoose.model('Tags', tagsSchema),
};

module.exports = models;