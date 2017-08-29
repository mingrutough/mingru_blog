const Models = require('../db');
const resData = require('../utils/resData'); // 接口返回的公共方法

const tagMethods = {};

// 添加标签
tagMethods.handlePostTag = async function (req, res, next) { 
    try {
        let tags = req.body.tag.trim().split(',');
        tags = tags.map((item) => { 
            return item.trim();
        });
        tags = tags.filter((item) => { 
            return item;
        });
        let promises = tags.map((item) => { 
            return Models.Tag.count({ 'name': item }); // 查询数据库中之前有没有记录该标签
        });  
        let tagsRepeatNum = await Promise.all(promises);
        tags = tags.filter((item, index) => { // 记录的话就不用写入数据库
            return tagsRepeatNum[index] < 1;
        });    
        promises = tags.map((item) => { 
            return new Models.Tag({ name: item }).save(); // 一个promise数组
        });
        await Promise.all(promises);
        res.send(resData(1));

    } catch (error) {
        res.status(500).send(resData(0));
    }
    
};

// 获取所有标签
tagMethods.handleGetTags = async function (req, res, next) { 
    try {
        const curPage = req.query.curPage || 1;
        const pageSize = req.query.pageSize || 10;  
        let skipNum = (curPage - 1) * 10;
        let totalItems = await Models.Tag.count({}); // 查询数据库中的总条目
        
        Models.Tag.find({}, null, {skip: Number(skipNum) , limit: Number(pageSize)}, function (err, data) { 
            if (err) {
                console.log(err);
                return res.status(500).send(resData(0));
            } 
            res.send(resData(1, '', data, totalItems));
        })
    } catch (error) {
        console.log(error);
        res.status(500).send(resData(0));
    }
}

// 删除单个标签
tagMethods.handleDeleteTag = async function (req, res, next) { 
    try {
        let id = req.params.id;
        Models.Tag.remove({_id: id}, function (err) { 
            if (err) { 
                console.log(error);
                return res.status(500).send(resData(0));
            }
            res.send(resData(1));
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(resData(0));
    }
}

// 修改单个标签

tagMethods.handleModifyTag = async function (req, res, next) { 
    try {
        let tag = req.body.tag.trim();
        let id = req.body.id;
        let tagRepeatNum = await Models.Tag.count({ 'name': tag }); // 查询数据库中之前有没有记录该标签 
        if (tagRepeatNum) {
            res.send(resData(0, '请勿重复建立标签'));
        } else { 
            Models.Tag.update({ _id: id }, { name: tag}, function (err, data) { 
                if (err) { 
                    console.log(error);
                    return res.status(500).send(resData(0));
                } 
                console.log(data);
                res.send(resData(1));
            });
        }

    } catch (error) {
        console.log(error);
        res.status(500).send(resData(0));
    }

};



module.exports = tagMethods;