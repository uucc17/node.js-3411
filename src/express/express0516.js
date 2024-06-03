const express = require('express');
const app = express();
const session = require('express-session');

app.use(session({
    secret:"AnimalBannaCandy",
}));

app.get("/setUser", (req, res)=>{
    req.session.user = {name:"kim", age:5}
    res.redirect("/getUser");
});

app.get("/getUser", (req, res)=>{
    res.send(req.session.user);
});

app.get("/deleteSession", (req, res)=>{
    if(req.session.user){
        req.session.destroy(()=>{
            res.redirect("/getUser");
        });
    }else{
        res.send("제거할 세션이 없습니다");
    }
});

app.get("/setUser/yoon", (req,res)=>{
    if(req.session == null){
        res.send("세션이 없습니다.") 
    }else{
        res.send("세션이 있습니다.");
    }
});

app.listen(8839, () => {
    console.log("8839이 포트입니다")
});