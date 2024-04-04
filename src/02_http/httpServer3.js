const http = require('http');
const fs = require('fs').promises;
const url = require('url');


const server = http.createServer();
//url을 받아옴
server.on('request',async(req,res)=>{

    try{
        let pathFileName = '/apple';
        const data = await fs.readFile(`.${pathFileName}.html`);
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'}); //파일을 plain타입으로 읽는다. 
        res.end(data);
    }
    catch(err){
        console.error(err);
        res.writeHead(500,{'Content-Type':'text/plain;charset=utf-8'});
        res.end("err: ",err.message)
    }
    console.log("method : ",req.method);//결과: GET
    console.log("urll",req.url); //결과: /
    console.log("url2",url.parse(req.url)); //Url{por}...
    console.log("url2-1",url.parse(req.url).pathname); //결과: '/'
    console.log("url3",url.parse(req.url).query);   //결과: null
    
});
//따로 정의할 수 있다. 
server.listen(8088,()=>{
    console.log("8088번 포트에서 서버가 대기중입니다. ");
});

// server.on('listening')

