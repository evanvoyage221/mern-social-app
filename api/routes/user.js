
const router = require("express").Router();

router.get("/",(req,res) => {
    res.send("hey user routes")
});



module.exports = router;

