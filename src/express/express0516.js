const express = require('express');
const app = express();
const session = require('express-session');

app.use(session({
    secret:"AnimalBannaCandy",
}));

app.listen(8839, () => {
    console.log("8839이 포트입니다")
})