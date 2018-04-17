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

//connect to our database
//Ideally you will obtain DB details from a config file

//var dbName = 'questionDB';
//var connectionString = 'mongodb://localhost:27017/' + dbName;

//mongoURI = 'mongodb://localhost:27017/' + dbName;

//MONGOLAB_URI = "mongodb://Karitas_hugbo:1234@ds263367.mlab.com:63367/veftjon"

MONGOLAB_URI = "mongodb://hugbo:1234@ds147469.mlab.com:47469/gordon"

mongoose.connect(MONGOLAB_URI)

//mongoose.connect(connectionString);

//configure body-parser
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api', questions || questionstext); //This is our route middleware

module.exports = app;
