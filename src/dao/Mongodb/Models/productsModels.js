import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

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
        type:Boolean
    
    },
    category: String,
    }, {timestamps:{createdAt:"created_at", updatedAt:"updatedAt_at"}});

schema.plugin(mongoosePaginate);

const productModel = mongoose.model(collection, schema);

export default productModel;