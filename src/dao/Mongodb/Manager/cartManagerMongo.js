import mongoose from "mongoose";
import cartModel from "../Models/cartModel.js";

export default class CartManager{

    getCart =(params)=>{

         return cartModel.find(params).lean();
    }

    getCartBy = (params)=>{
         return cartModel.findOne(params).lean();
    }

    createCart = (cart)=>{
        return cartModel.create(cart);
    }

    updateCart = (cid, pid) =>{
        return cartModel.updateOne(cid, pid)
    }

    deleteCart = (id) =>{
        return cartModel.findByIdAndDelete(id)
    }

    updateProductInCart = (cid, pid)=>{
        return cartModel.updateOne(cid, pid)
    }
   
}