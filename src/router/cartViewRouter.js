import {Router} from "express";
import CartManager from "../dao/Mongodb/Manager/cartManagerMongo.js";



const router = Router()

const cartManager = new CartManager()

router.get("/:cid", async(req, res)=>{
    const {cid} = req.params;
    const cart= await cartManager.getCartBy({_id:cid}) 
    res.render("cart", {cart})
})

export default router;