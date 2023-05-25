  import {Router} from "express";
  import CartManager from "../../dao/Mongodb/Manager/cartManagerMongo.js";
  // import cartModel from "../../dao/Mongodb/Models/cartModel.js";
  import mongoose from "mongoose";

  const router= Router();

  const serviceCart = new CartManager();
  
  router.get("/", async (req, res)=>{
    const carts = await serviceCart.getCart().populate();
    res.send({status:"success", payload: carts});
  });

  router.post("/", async (req, res)=>{
    const {products}=req.body;
    if(!products)return res.status(400).send({status:"error", error: "incompled values"});
    const cart = {
        products
    }
    const result = await serviceCart.createCart(cart);
    res.sendStatus(201);

  });

  router.put("/:cid/product/:pid", async(req, res)=>{
    const {cid} = req.params;
    const {pid} = req.params;
    await serviceCart.updateCart({_id:cid}, {$push:{products:{product: new mongoose.Types.ObjectId(pid)}}})
    res.sendStatus(201)
  })

  

  router.delete("/:cid", async (req, res)=>{
    const {cid} = req.params;
    await serviceCart.deleteCart(cid);
    res.send({status: "success", message: "cart delete"})
  });

  router.put("/:cid/productInCart/:pid", async(req, res)=>{
    const {cid} = req.params;
    const {pid} = req.params;
    await serviceCart.updateProductInCart({_id:cid},{$pull:{products:{product:{_id:pid}}}});
    res.sendStatus(201)
  })

  export default router;
  






