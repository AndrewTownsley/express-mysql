const express = require("express");
const {
     getOneProduct, 
     getAllProducts, 
     insertOneProduct, 
     deleteOneProduct, 
     updateOneProduct 
    } = require("../db/queries/products");
    
const router = express.Router();


router.get("/test", (req, res, next) => {
    try {
        res.json({ msg: "Working"})
    }catch(err) {
        next(err)
    }
});

router.get("./products/:id?", async (req, res, next) => {
    try {
        let{ id } = req.params;
        let data;
        if(id) {
            data = await getOneProduct(id);
        } else {
            data = await getAllProducts();
        }
        res.json(data);
    } catch(err) {
        next(err)
    }
});

router.post("./products", async (req, res, next) => {
    try {
        let product = req.body;
        let data = await insertOneProduct();
        res.json(data);
    } catch(err) {
        next(err)
    }
})

router.put("./products/:id", async (req, res, next) => {
    try {
        let { id } = req.params
        let product = req.body;
        let data = await updateOneProduct();
        res.json(data);
    } catch(err) {
        next(err)
    }
})

router.delete("./products/:id", async (req, res, next) => {
    try {
        let { id } = req.params;
        let data;
        let product = req.body;
        let data = await deleteOneProduct();
        res.json(data);
    } catch(err) {
        next(err)
    }
})

module.exports = router;
// export default router