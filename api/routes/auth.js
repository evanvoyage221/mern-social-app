const router = require("express").Router();
const User = require("../models/User.js");
const bcrypt = require("bcrypt");

//register
router.post("/register", async (req,res) =>{

    try{
        //generate new password
        const salt = await bcrypt.genSalt(10); // hash password
        const hashedPassword = await bcrypt.hash(req.body.password,salt);


        // create new user
        const newUser = await new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedPassword,
        });

        // save user to db and respond
        const user = await newUser.save();
        res.status(200).json(user);
    }catch (err) {
        res.status(500).json(err);
    }
});


//test functionality
// router.get("/",(req,res) => {
//     res.send("hey auth routes")
// });


//login
router.post("/login",async (req,res) => {
    try{
        // check for email account
        const user = await User.findOne({email:req.body.email});
        !user && res.status(404).json("user not found");

        //check password
        const validPassword = await bcrypt.compare(req.body.password,user.password)
        !validPassword && res.status(400).json("wrong password");

        // successful
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }

})


module.exports = router;