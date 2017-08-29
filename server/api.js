const express = require('express');
const router = express.Router();

const uploadToken = require('./utils/qiNiuUploadToken'); //得到七牛云的上传认证。
const apiMethods = require('./apiMethods');


router.get('/blog/:id', apiMethods.handleGetBlog); // 获取单个博客详情
router.get('/blogs', apiMethods.handleGetBlogs); // 获取博客列表
router.post('/blog', apiMethods.handlePostBlog); // 发布单个博客 
router.put('/blog', apiMethods.handleModifyBlog); // 修改单个博客 
router.delete('/blog/:id', apiMethods.handleDeleteBlog); // 删除单个博客 

router.get('/tags', apiMethods.handleGetTags); // 获取标签列表 
router.post('/tag', apiMethods.handlePostTag); // 添加标签 
router.put('/tag', apiMethods.handleModifyTag); // 修改单个标签 
router.delete('/tag/:id', apiMethods.handleDeleteTag); // 删除标签 

router.get('/uploadtoken', function (req, res) { // 七牛云上传认证获取接口
    res.send(uploadToken());

});

module.exports = router;
