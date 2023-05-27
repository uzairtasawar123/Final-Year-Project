const mongoose = require('mongoose')

const OrderPlaceSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
    },
    city:{
        type:String,
        required:true,

    },
    address:{
        type:String,
        required:true,

    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    price:{
        type:Number,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    PaymentType:{
        type:String,
        required:true,
    },
    buyerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true,
      },
      sellerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true,
      },
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
    

},{
    timestamps:true
})

const OrderPlace = new mongoose.model('orderplace' , OrderPlaceSchema)
module.exports = OrderPlace;