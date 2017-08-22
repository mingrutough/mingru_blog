const express = require('express');
const router = express.Router();

const uploadToken = require('./qiNiuUploadToken'); //得到七牛云的上传认证。
const apiMethods = require('./apiMethods');


router.get('/blog/:id', apiMethods.handleGetBlog); // 获取单个博客详情

router.post('/blog', apiMethods.handlePostBlog); // 发布单个博客 
router.post('/blog:id', apiMethods.handlePostBlog); // 修改单个博客 

router.get('/uploadtoken', function (req, res) { // 七牛云上传认证获取接口
    res.send(uploadToken());
});
router.get('/hello', function (req, res) { // 七牛云上传认证获取接口
    res.send('uploadToken()');
});

module.exports = router;
