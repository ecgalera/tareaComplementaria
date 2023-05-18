import {Router} from "express";
import ProductManager from "../../dao/Mongodb/Manager/productsManagerMongo.js";

const router = Router();
const productsServices = new ProductManager();

// homologación de rutas consas sin parametros: 
//-----------------------------------------
router.get("/", async (req, res)=>{
    const products = await productsServices.getProducts();
    res.send({status:"success", payload: products});
});

router.post("/", async (req, res)=>{
    const {title,description,thumnails,code,price,status,category} = req.body;
    if(!title ||!description||!thumnails||!code||!price||!status||!category)
    return res.status(400).send({status:"error", error: "incompled values"});
        const product ={
            title,
            description,
            thumnails,
            code,
            price,
            status,
            category
        };
        await productsServices.createProduct(product);
        res.sendStatus(201);

});

//cosas con parametros acá:
//----------------------------------------------

router.get("/:pid", async (req, res)=>{
    const {pid} = req.body.pid;
    const product = await productsServices.getElementById({_id:pid});
    if(!product) return res.status(404).send({status: error, error: "product no found"});
    res.send({status:"success", payload: product});
});

router.put("/:pid", async (req, res)=>{
    const {pid} = req.params;
    const updateProducts = req.body;
    const result = await productsServices.updateProduct(pid, updateProducts);
    res.sendStatus(201);
});

router.delete("/:pid", async (req, res)=>{
    const {pid} = req.params;
    await productsServices.deleteProduct(pid);
    res.sendStatus(201);
})


export default router;
