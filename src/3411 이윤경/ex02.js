const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();


app.use(cookieParser());

app.get('/',(request,response)=>{
    if(request.cookies.user){
        response.send("지정되어있는 쿠키가 없습니다");
    }
});

app.get('/home',(request,response)=>{
    response.send("grade", "gold");
});
app.get('/setCookie/silver',(request,response)=>{
    //쿠키 생성
    response.cookie("grade","sliver");
})


app.get('/setCookie/bronze',(request,response)=>{
    //쿠키 생성
    response.cookie("grade","bronze");
})

app.get('/deleteCookie', (req, res) => {
    if(req.cookies.user){
        res.clearCookie("user");
        res.redirect('/');
    }
    else {
        res.send('제거할 쿠키가 없습니다.');
    }
})
app.listen(8889,function(){
    console.log("8889 포트입니다.");
});
