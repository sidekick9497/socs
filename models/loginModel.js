var mongoose = require('mongoose');
var  Schema = mongoose.Schema;

var loginModel = new Schema({
    id:Number,
    password:String
});
module.exports = mongoose.model('login',loginModel);