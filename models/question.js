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
    number: 'string',
    always:'string',
    usually:'string',
    sometimes:'string',
    rarely:'string',
    never:'string'
});


module.exports = mongoose.model('Question', questionSchema);

module.exports = mongoose.model('Questiontext', questionText);