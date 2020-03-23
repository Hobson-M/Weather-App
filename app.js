var express = require('express');
var app = express();



var mongoose = require('mongoose');



app.get('/home', (req, res) => {
    res.render("It's working")
 
})
app.get("/about", (req, res)=> {
    res.send("My About Page")
})



app.listen(8080, ()=> {
    console.log('Port Running')
})