var app = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.urlencorded({extended : true}));



app.listen(8080)