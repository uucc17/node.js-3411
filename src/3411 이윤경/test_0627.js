const express = require('express');
const app = express();



const data =[
    {  
        "id": 1,
        "user_id": "user123",
        "date": "2024-06-25T00:00:00.000Z",
        "content": "This is a comment."
    }      
]

new Date();

app.get("/comments", (req, res)=>{
    res.send(data);
});

app.get("/comments/:id", (req, res)=>{
    res.send(data);
});

app.post("/comments", (req, res)=>{
    res.send(data.date());
});

app.post("/comments/:id", (req, res)=>{
    res.send(data);
});

app.listen(3000, () => {
    console.log("3000이 포트입니다")
});