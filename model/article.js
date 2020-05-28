const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const articleSchema = mongoose.Schema({

    name : {
        required : true,
        type: String,
        unique:1,
        maxlength:100
    },
    description : {
        required : true,
        type : String,
        maxlength : 1000000
    },
    originalPrice : {
        type : Number,
        required : true,
        maxlength : 255
    },
    sellingPrice : {
        type : Number,
        required : true,
        maxlength : 255
    },
    etat : {
        type : String,
        required : true,
        maxlength : 100
    },
    genre : {
        type : String,
        required : true,
        maxlength : 100
    },
    color : {
        type : String,
        required : true,
        maxlength : 100
    },
    phone : {
        type : String,
        required : true,
        maxlength : 100
    },
    email : {
        type : String,
        required : true,
        maxlength : 100
    },
    adress : {
        type : String,
        required : true,
        maxlength : 100
    },
    addressSupplement : {
        type : String,
        required : true,
        maxlength : 100
    },
    postalCode : {
        type : String,
        required : true,
        maxlength : 100
    },
    city : {
        type : String,
        required : true,
        maxlength : 100
    },
    images : {
        type : Array,
        default : []
    }
   
},{timestamps:true}); 


const Article = mongoose.model('Article',articleSchema);
module.exports = {Article}