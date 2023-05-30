import {Router} from "express";
import CartManager from "../dao/Mongodb/Manager/cartManagerMongo.js";



const router = Router()

const cartManager = new CartManager()

router.get("/:cid", async(req, res)=>{
    const {cid} = req.params;
    const cart= await cartManager.getCartBy({_id:cid}) 
    res.render("cart", {cart})
})

router.get(`/:cid`, async (request, response) => {
    try {
      const { cid } = request.params;
      const cart = await cartManager.getCartBy(cid);
      console.log(cart)
      if (!cart) {
      return response.status(404).send({ message: "ID not found" });
    
    }
    
    // Renderiza la plantilla ‘cart’ y pasa los datos del carrito
    
    response.render("cart", { product: cart.product });
    
    } catch (err) {
    
    console.log(err);
    
    }
    
    });
export default router;