var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var questionSchema = new Schema({
    title: String,
    company:'String',
    department:'String',
    score:'String'
});

module.exports = mongoose.model('Question', questionSchema);
