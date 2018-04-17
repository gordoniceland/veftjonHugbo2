var mongoose=require('mongoose');
var Schema=mongoose.Schema;

// Schema for Users 
var userSchema = new Schema({
    username: String,
    password:'String'
});

module.exports = mongoose.model('User', userSchema);
