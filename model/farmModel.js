const mongoose= require("mongoose");

const farmSchema= new mongoose.Schema({
    Name:{
        type: String,
        required:[true,"Name is required."],
        unique:[true,"Animal with name already exist."]
    },

    Breed:{
        type:String,
        required:[true,'Animal breed is required.']
    },

    Colour:{
        type:String,
        required:[true,'Animal colour is required']
    },

    Age:{
        type:Number,
        required:[true,'Animal age is required.']
    },

    isMatured:{
        type:Boolean,
        default: false
    }, 

    isSold:{
        type:Boolean,
        default: false
    }

},{timestamps:true})

const farmModel = mongoose.model('Animal Farm',farmSchema);


module.exports= farmModel;