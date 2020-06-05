var http = require("http");
const express = require("express");
const app = express();
const { posts,users, group, usuarioid,postid } = require('./view');
const helmet = require('helmet');
const cors = require('cors')

app.use(cors())
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


var server = http.createServer(app);
server.listen(process.env.PORT || 3000);


  app.get("/api/group", (req,res,)=>{
    group(res);
})

app.get("/api/users", (req,res)=>{
  users(res);
})

app.get("/api/posts", (req,res)=>{
  posts(res);
})

app.get("/api/users/:id", (req,res)=>{
  usuarioid(req,res);
})

app.get("/api/post/:id", (req,res)=>{
  postid(req,res)
});





