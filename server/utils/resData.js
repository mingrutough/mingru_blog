let resData = function (tag, msg, data, totalItems) { // tag为1表示成功，tag为0表示失败
    let res = {
        success: true, // true 代表成功，false 代表失败。
        msg: '成功',
        data: '',
    };
    if (tag) {
        if (data) { 
            res.data = data;
        }
        if (totalItems) { 
            res.totalItems = totalItems;
        }
        res.msg = msg||'成功';
    } else { 
        res.success = false;
        res.msg = msg ||'服务器错误';
        
    }

    return res;
};

module.exports = resData;



