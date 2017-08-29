const Models = require('./db');
// const resData = require('./utils/resData'); // 接口返回的公共方法

const tagMethods = require('./methods/tag');
const blogMethods = require('./methods/blog');

const methods = {
    ...tagMethods,
    ...blogMethods,
};

module.exports = methods;