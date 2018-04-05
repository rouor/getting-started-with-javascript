var jsonfile = require('jsonfile');
var fs = require('fs');

var pathString = './words/';
var writePathString = './all_words.json';
var errorPathString = './error_data.json';


// 定义要查询的目标文件夹。如果你想查lesson2的内容，就修改下面路径字符串。
var dirPathString = './words';

fs.readdir(pathString,function(err, files) {
  if(err){
    console.log('wrong!');
    return;
  }
//把含有"json"字符的文件名过滤出来,把所有文件保存在jsonFiles数组中
var jsonFiles = [];
for (var i = 0; i < files.length; i++){
  if (files[i].includes('.json')) {
    jsonFiles.push(files[i]);
  }
}

//循环读取json文件的内容，并都存在jsonList数组内。读取出错的文件名存在errorFiles数组内。
var jsonList = [];
var errorFiles =[];
for (var i=0; i<jsonFiles.length; i++){
  try{
    var content = jsonfile.readFileSync(pathString + jsonFiles[i]);
    jsonFiles.push (content)
  } catch (err) {
    errorFiles.push(jsonFiles[i]);
  }
}

jsonfile.writeFileSync(writePathString, jsonList);
jsonfile.writeFileSync(errorPathString, errorFiles);

});
