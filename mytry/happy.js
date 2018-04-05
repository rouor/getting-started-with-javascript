
// 引入fs模块
var fs = require('fs');

// 引入file json库
var jsonfile = require('jsonfile');

// 定义要扫描的目标文件夹
var pathString = './words/';

// 用于存放所有心里话
var writePathString = './all_words.json';

// 用于存放格式不正确的json文件名
var errorPathString = './error_data.json';

// 调用fs的readdir函数读取所有文件
fs.readdir(pathString, function(err, files) {
  if (err) {
    console.log('读取文件失败');
    return;
  }
  console.log(files);
};
