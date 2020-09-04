module.exports = app => {
    const shop = require("../controllers/shop.controller");
    var router = require("express").Router();

    router.post("/", shop.createShop);
    router.get("/",shop.findAllShop);
    router.get("/:id", shop.findOneShop);
    router.put("/:id", shop.updateShop);
    router.delete("/:id",shop.deleteShop);

    app.use('/api/shop', router);
};