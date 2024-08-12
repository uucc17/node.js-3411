const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const session = require('express-session');
const myPlaintextPassword = 'panda';
const saltRounds = 10;

app.get("/setSession/panda", (req, res)=>{
  req.session.user = {animal}
  res.redirect("/getUser");
});

app.get("/getSession", (req, res)=>{
  res.send(session.user())
});

server.listen(3002,()=>{
  console.log("3002번 포트에서 서버가 대기중입니다. ");
});