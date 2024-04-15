const express = require('express');
const app = express();
const path = require('path');

app.use("/html2", express.static(path.join(__dirname,"html")))

app.get('/', function(req, res){
    console.log(":", path.join(__dirname,"html")); //ㅇ?
    res.send('Hello World');
});

app.get('/home', function(req, res){
    res.sendFile(__dirname+'/home.html');
});

app.get('/grape/:name', function(req, res){
    console.log('path', req.path);
    console.log('params', req.params);
    console.log('query', req.query);
    res.send("포도페이지입니다.");
});

app.listen(3000);