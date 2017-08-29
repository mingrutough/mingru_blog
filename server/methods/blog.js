const Models = require('../db');
const resData = require('../utils/resData'); // 接口返回的公共方法

const blogMethods = {};

// 获取单个博客
blogMethods.handleGetBlog = function () { };
// 添加博客
blogMethods.handlePostBlog = function (req, res, next) { 
    if (typeof req.params.id === 'undefined') { // 没有id  对应为新建博客状态

        const newBlog = new Models.Blog({
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

module.exports = blogMethods;