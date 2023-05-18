import {Router} from "express";


const router = Router();

router.get("/", (req, res)=>{
    res.render("chat")
})

router.get("/chat", async(req, res)=>{
    res.render("companyChat")
})

export default router