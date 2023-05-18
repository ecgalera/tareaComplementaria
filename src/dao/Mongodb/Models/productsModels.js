import mongoose from "mongoose";

const collection = "Products";

const schema = new mongoose.Schema({
    title:String,
    description: String,
    thumnails:String,
    code:String,
    price: {
        type:Number,
        default: 0
    },
    status: {
        tipe:Boolean
    
    },
    category: String,
}, {timestamps:{createdAt:"created_at", updatedAt:"updatedAt_at"}});

const productModel = mongoose.model(collection, schema);

export default productModel;