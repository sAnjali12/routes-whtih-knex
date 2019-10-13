var express = require('express');
var app = express();
var mysql = require('mysql');
const bodyParser=require("body-parser");
app.use(bodyParser.json())
var knex = require('knex')({
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: 'navgurukul',
      database: 'navgurukulInformation'
    },
  
});

// Get data..
app.get("/getdata",function(req,res){
    knex.select('*').from('language').then((data)=>{
        res.send(data)
    })
});



// Whith id get data..
app.get('/languages/:id',(req,res)=>{
    var id = req.params.id;
    knex.select('*').from('languages').where('id',id).then((data)=>{
        res.send(data)
    })
});

// Using distinct
app.get("/distinct",function(req,res){
    knex.distinct("language").from("languages").then((data)=>{
        res.send(data)
    })
});

// arthmetic opratore
app.get("/WHERE",function(req,res){
    knex.select("*").from("languages").where("id",">",7).then((data)=>{
        res.send(data)
    }).catch(()=> {
        console.log("ERRORS----------------")
    })
});

// using LIMIT
app.get("/using-Between",function(req,res){
    knex.select("*").from("languages").limit(6).then((data)=>{
        res.send(data)
    })
});


// POST DATA...
app.post("/posting",function(req,res){
    knex('languages').insert({name: req.body.name,language: req.body.language}).then(()=>{
        knex.select("*").from("languages").then((data)=>{
            res.send(data)
        })
    }).catch(()=>{
        console.log("ERROR-----------------")
    })
});


// UPDATE DATA...
app.put("/update/:id",function(req,res){
    knex("languages").where("id",req.params.id).update({"name": req.body.name, "language": req.body.language}
    ).then((data)=>{
        return res.end(JSON.stringify("Updated"))
    }).catch((err)=>{
        console.log(err);
    })
});


// DELETE DATA...
app.delete("/delete/:id",function(req,res){
    knex("languages").where("id",req.params.id).del().then((data)=>{
        return res.end(JSON.stringify("Deleted"))
    }).catch((err)=>{
        console.log(err)
    })
});



app.listen(3000, function () {
    console.log('Express server is listening on port 3000');
});