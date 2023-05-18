import cartModel from "../Models/cartModel.js";

export default class CartManager{

    getCart =(params)=>{

         return cartModel.find(params);
    }

    getCartBy = (params)=>{
         return cartModel.findOne(params);
    }

    createCart = (cart)=>{
        return cartModel.create(cart);
    }

    updateCart = (id, cart) =>{
        return cartModel.findByIdAndUpdate(id, {$set: cart});
    }

    deleteCart = (id) =>{
        return cartModel.findByIdAndDelete(id)
    }
   
}