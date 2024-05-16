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

app.listen(8839, () => {
    console.log("8839이 포트입니다")
})