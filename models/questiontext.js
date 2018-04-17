var mongoose=require('mongoose');
var Schema=mongoose.Schema;

//Schema for questions text and score of each question
var questionText = new Schema({
    question: String,
    number: 'string',
    always:'string',
    usually:'string',
    sometimes:'string',
    rarely:'string',
    never:'string'
});


module.exports = mongoose.model('Questiontext', questionText);