const { type } = require('express/lib/response');
const mongoose = require ('mongoose');

const productSchema = mongoose.Schema(
    {
        name: {
            type : String,
            required :[true, "Please enter a product name"]
        },
        quiantity:{
            type:Number,
            required:true,
            default:0
        },
        price:{
            type:Number,
            required:true,
        },
        image:{
            type: String,
            required:false
        }
    },
    {
        timestamps:true,
    }
    )


    const Products = mongoose.model('Product', productSchema);

    module.exports = Products