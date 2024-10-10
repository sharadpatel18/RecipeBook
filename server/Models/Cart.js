const mongoose = require('mongoose');

const ATCschema = new mongoose.Schema({
    name:{
        type:String,
    },
    image:{
        type:String
    },
    description:{
        type:String
    },
    person:{
        type:Number
    },
    Ingredients:[
        {
            ingredientname:{
                type:String
            },
            ingredientquentity:{
                type:Number
            },
            ingredientunit:{
                type:String
            },
            ingredientprice:{
                type:Number
            }
        }    
    ],
    TotalPrice:{
        type:Number
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
    }
})

const CartData = mongoose.model("CartData" , ATCschema);
module.exports = CartData;