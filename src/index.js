const express = require('express');
const cookieParser = require('cookie-pearser')
const app = express();

app.use(cookieParser());

app.get('/', (req, res) => {
    res.cookie("cookie", "chickchock",{
        maxAge:50000
    });
    res.send("<h1>홈입니다.</h1>")
});

app.get("/cookie", (req, res) => {
    const c1 = req.cookies.cookie;
    res.send("<h1>쿠키페이지입니다</h1>")
});

app.get("/clear",(req,res)=>{
    res.clearCookie("cookie");
    res.send("<h1>쿠키가 삭제되었습니다.");
})

app.get("/login", (req, res))

app.listen(3000);