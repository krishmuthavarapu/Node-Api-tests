module.exports = app =>{
    const tutorials = require("../controllers/tutorial.controller");
    express = require('express');
    let router = express.Router();

    router.post("/",tutorials.create)
    router.get("/",tutorials.findAll);
    router.get("/published",tutorials.findPublished);
    router.get("/:id",tutorials.findOne);
    router.put("/:id",tutorials.update);
    router.delete("/:id",tutorials.delete);
    router.delete("/",tutorials.deleteAll);
    app.use("/api/tutorials", router);
}