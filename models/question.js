var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var questionSchema = new Schema({
    email: String,
    company:'String',
    department:'String',
    score:'String'
});

var questionText = new Schema({
    question: String,
    always:'int',
    usually:'int',
    sometimes:'int',
    rarely:'int',
    never:'int'
});


module.exports = mongoose.model('Question', questionSchema, questionText);

//module.exports = mongoose.model('Questiontext', questionText);