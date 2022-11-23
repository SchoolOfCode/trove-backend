const express = require ("express");
const router = express.Router();
const { getAllLinks, addNewPost, deletePostByID } = require ("../Models/posts");

router.get("/", async function (req, res) {
    const postsArr = await getAllLinks();
    res.json({success:true, payload: postsArr});
    console.log(res.body)});


router.post("/", async function (req, res) {
    console.log("----> This is routing the post")
    const newPostObj = await addNewPost(req.body);
    res.json({success:true, payload: newPostObj});
    console.log(res.body)
})

router.delete("/:id", async function (req, res) {
    const deletedItems = await deletePostByID(req.params.id);
    res.json({success: true, payload: deletedItems});
    console.log(res.body)
})


module.exports = router;