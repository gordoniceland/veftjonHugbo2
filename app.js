/**
 * Created by Karítas Sif 
 */

// Load Our Modules
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var questions = require('./routes/questions'); //routes are defined here
var app = express(); //Create the Express app
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;



//connect to our database
//Ideally you will obtain DB details from a config file

//var dbName = 'questionDB';
//var connectionString = 'mongodb://dbuser:dbpass@host:port/' + dbName;
//(Focus on This Variable)
var url = 'mongodb://heroku_ct52v3t8:55paqv3nnehlj3kgn6f1h9e5mr@dds235169.mlab.com:35169/heroku_ct52v3t8';      
//(Focus on This Variable)

// Use connect method to connect to the Server
  MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    console.log('Connection established to', url);

    // do some work here with the database.

    //Close connection
    db.close();
  }
});


mongoose.connect(url);

//configure body-parser
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api', questions); //This is our route middleware

module.exports = app;
