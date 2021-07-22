const router = require("express").Router();
const Post = require("../models/Post.js");

// create a post
router.post("/", async(req,res) => {
    const newPost = new Post(req.body);
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }catch (err) {
        res.status(500).json(err);
    }
} )
// update a post

router.put("/:id", async (req,res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.updateOne({ $set:req.body });
            res.status(200).json("post has been updated!");
        } else {
            res.status(403).json("can only update your posts");
        }
    }catch (err) {
        res.status(500).json(err);
    }
});
// delete a post

router.delete("/:id", async (req,res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.deleteOne();
            res.status(200).json("post has been deleted!");
        } else {
            res.status(403).json("can only delete your posts");
        }
    }catch (err) {
        res.status(500).json(err);
    }
});

// like a post

router.put("/:id/like", async (req,res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne( { $push:{likes:req.body.userId }});
            res.status(200).json("the post has been liked!");
        }else{
            await post.updateOne( { $pull: { likes: req.body.userId }});
            res.status(200).json("The post is unliked");
        }
    }catch (err){
        res.status(500).json(err);
    }
})
// get a post
// get timeline posts


module.exports = router;