const mongoose=require("mongoose")
var tokenSchema= new mongoose.Schema({
    tokenVal: {
        type: String,
        required: true,
        maxlength: 255,
        minlength: 3
    },
    date: {
        type: Date,
        required: true,
        maxlength: 255,
        minlength: 3
    },
    expiryDate:{
        type: Date,
        required: true
    },
    active:{
        type: Boolean,
        required: true
    }
});

var token =mongoose.model('Token',tokenSchema);
module.exports.Token=token;