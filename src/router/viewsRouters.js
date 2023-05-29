import {Router} from "express";
import productModel from "../dao/Mongodb/Models/productsModels.js";

const router = Router();



router.get("/", async(req, res)=>{
    const {page = 1} =req.query;
    const{docs, hasPrevPage, hasNextPage, prevPage, nextPage, ...rest}= await productModel.paginate({category:"verduleria"},{page, limit:3,lean:true});
    const product = docs;
    res.render("product", {
        product,
        hasPrevPage, hasNextPage, prevPage, nextPage, page: rest.page,
    })
})

router.get("/chat", async(req, res)=>{
    res.render("companyChat")
});

router.get("/cart", async(req, res)=>{
    res.render("cart")
})

export default router;

