const express = require('express');
const router = express.Router();
const {
  getAllPosts,
  getPostByTag,
  addNewPost,
  deletePostByID,
} = require('../Models/posts');

// router.get('/', async function (req, res) {
//   const postsArr = await getAllPosts();
//   res.json({ success: true, payload: postsArr });
//   console.log(res.body);
// });

router.get('/', async function (req, res) {
  console.log(req.query);
  if (req.query.search !== undefined) {
    const posts = await getPostByTag(req.query.search);
    res.json({ success: true, playload: posts });
  }
  const posts = await getAllPosts();
  res.json({ success: true, playload: posts });
  console.log(res.body);
});

router.post('/', async function (req, res) {
  const newPostObj = await addNewPost(req.body);
  res.json({ success: true, payload: newPostObj });
});

router.delete('/:id', async function (req, res) {
  const deletedItems = await deletePostByID(req.params.id);
  res.json({ success: true, payload: deletedItems });
  console.log(res.body);
});

module.exports = router;
