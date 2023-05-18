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
        tipe:Boolean,
        default:true
    },
    category: String,
},{timestamps:{createdAt:creacted_at, updatedAt:update_at}});

const productModel = mongoose.model(collection, schema);

export default productModel;