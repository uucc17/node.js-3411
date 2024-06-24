const express = require('express');
const router = express.Router();

router.get('/form',(req, res) => {
    res.send("포트연결완료");
});

router.get('/form/qna', (res, rep)=>{
    res.send("qna페이지입니다");
})

router.get('/form/faq', (res, rep)=>{
    res.send("faq페이지입니다");
})