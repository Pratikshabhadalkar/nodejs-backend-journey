const  http=require("http");
const { type } = require("os");
const server=http.createServer((req,res)=>{
    res.setHeader("Content-Type","application/json");

    if(req.method==='GET' && req.url==="/ping"){
        res.statusCode=200;
        res.end(JSON.stringify({status:"server is running"}))
    }
    else{
        res.statusCode=404;
        res.end(JSON.stringify({message:"Route not  found"}))
    }
});

server.listen(5500,()=>{
    console.log("Server running  on  port 5500");
})