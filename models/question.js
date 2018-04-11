var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var questionSchema = new Schema({
    email: String,
    company:'String',
    department:'String',
    score:'String'
});

module.exports = mongoose.model('Question', questionSchema);
