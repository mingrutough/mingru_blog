const qiniu = require('qiniu');

const accessKey = '-3fcBOd62nsL-954mHSd7IaBVnhdRCZdWfAGOkaJ';
const secretKey = 'HMBwQ-Tf6uB5e_MuiOxj4BXzcvV1JGKvvcJfegki';
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);

const options = {
    scope: 'mingrutough',
    // callbackUrl: 'http://api.example.com/qiniu/upload/callback',
    // callbackBody: '{"key":"$(key)","hash":"$(etag)","fsize":$(fsize),"bucket":"$(bucket)","name":"$(x:name)"}',
    // callbackBodyType: 'application/json'
}

const uploadToken = function () { 
    return new qiniu.rs.PutPolicy(options).uploadToken(mac);
}; 

module.exports = uploadToken;