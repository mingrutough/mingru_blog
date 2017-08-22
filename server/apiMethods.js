const Models = require('./db');

const methods = {};

methods.handleGetBlog = function () { };
methods.handlePostBlog = function (req, res, next) { 
    if (typeof req.params.id === 'undefined') { // 没有id  对应为新建博客状态

        const newBlog = new Models.Tags({
            success: true,
            data: {
                title: req.body.blogTitle,
                publish_date: req.body.publishTime,
                tags:[
                    {
                        // tag_id: String,
                        // name: String,
                    }
                ],
                description: req.body.blogDescribe,
                content: req.body.content,
                // blog_id: String,       
            },    
        });
        newBlog.save((err,data) => {
            if (err) {
                res.send(err);
            } else {
                res.send('createAccount successed');
            }
        });       
    } else { 

    };    
};

module.exports = methods;