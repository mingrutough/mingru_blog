const api = require('./api'); // 接口集合
const fs = require('fs');
const path = require('path');

const bodyParser = require('body-parser');
const express = require('express');

const app = express();
// console.log(path.resolve(__dirname, '../dist'));
// app.use(express.static(path.resolve(__dirname, '../dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', api);
app.listen(3002, function () {
    console.log('App listening on port 3002!');
});
