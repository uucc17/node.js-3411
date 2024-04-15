const express = require('express');
const app = express();
const path = require('path');

// 미들웨어 함수
// const middle1 = (req, res, next) =>{
//     console.log("미들웨어 실행");
//     next();
// };

const middle1 = require("./my_modules/middle1")

app.use(middle1);

app.get('/', function(req, res){
    console.log(":", path.join(__dirname,"html")); //ㅇ?
    res.send('Hello World2');
});

app.get('/home', function(req, res){
    res.sendFile(__dirname+'/home.html');
    res.send('홈입니다');
});

app.get('/grape/:name', function(req, res){
    console.log('path', req.path);
    console.log('params', req.params);
    console.log('query', req.query);
    res.send("포도페이지입니다.");
});

app.listen(3000);