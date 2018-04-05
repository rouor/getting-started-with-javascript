var jsonfile = require('jsonfile');
var fs = require('fs');

var pathString = './words/';
var writePathString = './all_words.json';
var errorPathString = './error_data.json';

fs.readdir(pathString, function(err, files) {
  if (err) {
    console.log('读取文件失败');
    return;
  }

  //把含有"json"字符的文件名过滤出来,把所有文件保存在jsonFiles数组中
  var jsonFiles = [];
  for (var i = 0; i < files.length; i++) {
    if (files[i].includes('.json')) {
      jsonFiles.push(files[i]);
    }
  }

  //循环读取json文件的内容，并都存在jsonList数组内。读取出错的文件名存在errorFiles数组内。
  var jsonList = [];
  var errorFiles = [];
  for (var i = 0; i < jsonFiles.length; i++) {
    try {
      // 读取json文件
      var content = jsonfile.readFileSync(pathString + jsonFiles[i]);
      jsonList.push(jsonList[i]);
    } catch (err) {
      // 如果读取错误就把错误的文件名写入到errorFiles数组内
      errorFiles.push(jsonFiles[i]);
    }
  }

  // 将收集到的数据写入到一个json文件中
  jsonfile.writeFileSync(writePathString, jsonList);

  // 将收集到的错误文件写入到一个json文件中
  jsonfile.writeFileSync(errorPathString, errorFiles);
