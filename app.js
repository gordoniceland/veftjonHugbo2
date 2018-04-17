/**
 * Created by Karítas Sif 
 */

// Load Our Modules
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var questions = require('./routes/questions');//routes are defined here
var app = express(); //Create the Express app
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

//connect to our database store the db on mlab

MONGOLAB_URI = "mongodb://hugbo:1234@ds111078.mlab.com:11078/gordon"

mongoose.connect(MONGOLAB_URI)

//configure body-parser
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api', questions || questionstext); //This is our route middleware

module.exports = app;
