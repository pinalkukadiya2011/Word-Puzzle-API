const mongoose = require('mongoose');

var puzzleschema = new mongoose.Schema({

    name:{
        type:String
    } ,  
    images:{
        type:String
    },
    word:{
        type:String
    }
});

module.exports = mongoose.model('user_image',puzzleschema);