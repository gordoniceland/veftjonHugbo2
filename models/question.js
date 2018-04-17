var mongoose=require('mongoose');
var Schema=mongoose.Schema;

// Schema for Users 
var questionSchema = new Schema({
    email: String,
    company:'String',
    department:'String',
    score:'String'
});

module.exports = mongoose.model('Question', questionSchema);
