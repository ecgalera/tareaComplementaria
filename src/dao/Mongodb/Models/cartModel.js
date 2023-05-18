import mongoose from "mongoose";

const collection = "Cart";

const schema = new mongoose.Schema({

    products: []
    
},{timestamps:{createdAt:creacted_at, updatedAt:update_at}});

const cartModel = mongoose.model(collection, schema);

export default cartModel