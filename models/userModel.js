var mongoose = require('mongoose');
var  Schema = mongoose.Schema;

var userModel = new Schema({
    firstName:String,
    lastName:String,
    age:Number,
    id:Number
});
module.exports = mongoose.model('user',userModel);