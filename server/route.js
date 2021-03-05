const router = require("express").Router()
const controllers = require("./controllers")

router.get("/", controllers.getAll)
router.post("/:todoId", controllers.create)
router.delete("/:todoId", controllers.delete)
router.put("/:todoId/complete", controllers.complete)

router.put('/',function(req,res){
    console.log(" all todos ");
    res.sendFile('./public/index.html');
});

module.exports = router;